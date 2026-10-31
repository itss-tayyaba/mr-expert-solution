import React, { useState, useEffect } from 'react';
import { 
  Building2, Users, DollarSign, TrendingUp, CheckCircle2, 
  Clock, AlertCircle, RefreshCw, Download, Search, ShieldCheck, Mail, Phone 
} from 'lucide-react';
import { fetchOrdersApi, updateOrderStatusApi, fetchStatsApi } from '../utils/api';

export const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'orders' | 'contacts' | 'leads'>('orders');
  const [orders, setOrders] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({
    totalBusinessesFormed: 10423,
    activeOrders: 2,
    completedOrders: 1,
    totalLeads: 1,
    totalRevenueUSD: 907
  });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const statsRes = await fetchStatsApi();
      setStats(statsRes);

      const ordersRes = await fetchOrdersApi();
      setOrders(ordersRes);

      // fetch contacts & leads
      const contactRes = await fetch('/api/contact').then(r => r.json()).catch(() => ({ contacts: [] }));
      setContacts(contactRes.contacts || []);

      const leadsRes = await fetch('/api/leads').then(r => r.json()).catch(() => ({ leads: [] }));
      setLeads(leadsRes.leads || []);
    } catch (err) {
      console.warn('Admin load error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    await updateOrderStatusApi(orderId, newStatus);
    setOrders(prev =>
      prev.map(o => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  const exportCSV = () => {
    if (orders.length === 0) return;
    const headers = ['Order ID', 'Company Name', 'Customer Name', 'Email', 'Phone', 'Jurisdiction', 'Package', 'State', 'Total', 'Status', 'Date'];
    const rows = orders.map(o => [
      o.id,
      `"${o.companyName}"`,
      `"${o.fullName}"`,
      o.email,
      `"${o.phone}"`,
      o.jurisdiction,
      o.packageName,
      o.stateCode,
      o.totalPrice,
      o.status,
      o.createdAt
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `MR_Expert_Solution_Orders_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredOrders = orders.filter(o =>
    (o.companyName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (o.fullName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (o.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (o.id || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-gray-200/80 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="section-badge">Admin Workspace</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                Live Backend Connected
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 mt-2">
              Corporate Orders & Pipeline Management
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              className="py-2.5 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 flex items-center gap-2 transition-colors shadow-sm"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
              Refresh Data
            </button>
            <button
              onClick={exportCSV}
              className="py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              Export Orders CSV
            </button>
          </div>
        </div>

        {/* Stats Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-8">
          <div className="p-5 rounded-3xl bg-white border border-gray-200/80 shadow-sm">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Total Formations
            </div>
            <div className="text-3xl font-black text-gray-900 font-display mt-1">
              {stats.totalBusinessesFormed?.toLocaleString()}
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">
              +100% remote legal entities
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-gray-200/80 shadow-sm">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Active Pipeline
            </div>
            <div className="text-3xl font-black text-amber-600 font-display mt-1">
              {stats.activeOrders}
            </div>
            <div className="text-[11px] text-gray-500 mt-1">
              Orders currently processing
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-gray-200/80 shadow-sm">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Orders Revenue
            </div>
            <div className="text-3xl font-black text-emerald-800 font-display mt-1 font-mono">
              ${stats.totalRevenueUSD?.toLocaleString()}
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">
              Live orders tally
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-gray-200/80 shadow-sm">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Captured Leads
            </div>
            <div className="text-3xl font-black text-gray-900 font-display mt-1">
              {stats.totalLeads}
            </div>
            <div className="text-[11px] text-gray-500 mt-1">
              10% discount claimants
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 pb-4 border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'orders'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white hover:bg-gray-100 text-gray-700'
            }`}
          >
            Formation Orders ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'contacts'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white hover:bg-gray-100 text-gray-700'
            }`}
          >
            Contact Inquiries ({contacts.length})
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'leads'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white hover:bg-gray-100 text-gray-700'
            }`}
          >
            Promo Leads ({leads.length})
          </button>
        </div>

        {/* Tab 1: Orders Table */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="relative w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search order ID, company or client..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600/30 bg-white"
                />
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200/80 shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-emerald-950 text-white uppercase font-bold tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3.5 px-4">Order ID & Date</th>
                      <th className="py-3.5 px-4">Proposed Company</th>
                      <th className="py-3.5 px-4">Founder Contact</th>
                      <th className="py-3.5 px-4">Plan & Jurisdiction</th>
                      <th className="py-3.5 px-4">Total</th>
                      <th className="py-3.5 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredOrders.map((o) => (
                      <tr key={o.id} className="hover:bg-emerald-50/30 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-gray-800">
                          {o.id}
                          <span className="block font-normal text-[10px] text-gray-400">
                            {new Date(o.createdAt).toLocaleDateString()}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-gray-900">
                          {o.companyName}
                          {o.stateCode && (
                            <span className="block text-[10px] text-emerald-700 font-semibold">
                              State: {o.stateCode}
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-gray-900">{o.fullName}</div>
                          <div className="text-gray-500 text-[11px]">{o.email}</div>
                          <div className="text-gray-400 text-[10px]">{o.phone}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px] uppercase">
                            {o.jurisdiction} · {o.packageName}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-emerald-800 font-mono text-sm">
                          ${o.totalPrice} {o.currency}
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={o.status}
                            onChange={(e) => handleStatusChange(o.id, e.target.value)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold border focus:outline-none cursor-pointer ${
                              o.status === 'completed'
                                ? 'bg-emerald-100 border-emerald-300 text-emerald-900'
                                : o.status === 'filed_with_state'
                                ? 'bg-blue-100 border-blue-300 text-blue-900'
                                : o.status === 'in_review'
                                ? 'bg-amber-100 border-amber-300 text-amber-900'
                                : 'bg-gray-100 border-gray-300 text-gray-800'
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="in_review">In Review</option>
                            <option value="filed_with_state">Filed With State</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Contacts */}
        {activeTab === 'contacts' && (
          <div className="space-y-3">
            {contacts.map((c) => (
              <div key={c.id} className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-gray-900 text-sm">{c.name}</div>
                  <span className="text-[10px] text-gray-400">{new Date(c.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5 text-emerald-600" /> {c.email}</span>
                  {c.phone && <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5 text-emerald-600" /> {c.phone}</span>}
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold">{c.service}</span>
                </div>
                <p className="pt-1 text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-100 leading-relaxed">
                  "{c.message}"
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Leads */}
        {activeTab === 'leads' && (
          <div className="rounded-2xl bg-white border border-gray-200/80 shadow-sm overflow-hidden text-xs">
            <table className="w-full text-left">
              <thead className="bg-emerald-950 text-white uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3">Lead ID</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Promo Code Claimed</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.map((l) => (
                  <tr key={l.id} className="hover:bg-gray-50">
                    <td className="p-3 font-mono font-bold text-gray-800">{l.id}</td>
                    <td className="p-3 font-semibold text-gray-900">{l.email}</td>
                    <td className="p-3 font-mono text-emerald-700 font-bold">{l.code}</td>
                    <td className="p-3 text-gray-400">{new Date(l.claimedAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};
