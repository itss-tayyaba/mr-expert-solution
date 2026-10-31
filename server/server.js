import express from 'express';
import cors from 'cors';
import { readDb, writeDb } from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'MR EXPERT SOLUTION Backend API',
    version: '2.0.0',
    timestamp: new Date().toISOString()
  });
});

// 2. Real-time platform stats
app.get('/api/stats', (req, res) => {
  const db = readDb();
  const totalRevenue = db.orders.reduce((sum, o) => sum + (Number(o.totalPrice) || 0), 0);
  res.json({
    totalBusinessesFormed: 10420 + db.orders.length,
    activeOrders: db.orders.filter(o => o.status !== 'completed').length,
    completedOrders: db.orders.filter(o => o.status === 'completed').length,
    totalLeads: db.leads.length,
    totalAuditsRun: 1580 + db.audits.length,
    approvalRate: "98.4%",
    totalRevenueUSD: totalRevenue
  });
});

// 3. Orders API
app.get('/api/orders', (req, res) => {
  const db = readDb();
  const { status, search } = req.query;
  let results = [...db.orders];

  if (status) {
    results = results.filter(o => o.status === status);
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(o =>
      o.id.toLowerCase().includes(q) ||
      o.companyName.toLowerCase().includes(q) ||
      o.fullName.toLowerCase().includes(q) ||
      o.email.toLowerCase().includes(q)
    );
  }

  // Sort newest first
  results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  res.json({ orders: results, count: results.length });
});

app.post('/api/orders', (req, res) => {
  const {
    companyName,
    fullName,
    email,
    phone,
    jurisdiction = 'usa',
    packageName = 'Gold',
    stateCode = 'WY',
    addOns = [],
    totalPrice = 0,
    currency = 'USD'
  } = req.body;

  if (!fullName || !email || !phone) {
    return res.status(400).json({ error: 'Full name, email, and phone are required.' });
  }

  const db = readDb();
  const orderId = `MES-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

  const newOrder = {
    id: orderId,
    companyName: companyName ? companyName.trim() : 'Company Name Pending',
    fullName: fullName.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    jurisdiction,
    packageName,
    stateCode,
    addOns: Array.isArray(addOns) ? addOns : [],
    totalPrice: Number(totalPrice) || 0,
    currency,
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  db.orders.unshift(newOrder);
  writeDb(db);

  console.log(`[Order Created] ID: ${orderId} | Company: ${newOrder.companyName} | Total: ${currency} ${totalPrice}`);
  res.status(201).json({
    success: true,
    message: 'LLC Formation application received successfully.',
    order: newOrder
  });
});

app.patch('/api/orders/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ['pending', 'in_review', 'filed_with_state', 'completed', 'cancelled'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: `Invalid status. Valid values: ${validStatuses.join(', ')}` });
  }

  const db = readDb();
  const orderIdx = db.orders.findIndex(o => o.id === id);

  if (orderIdx === -1) {
    return res.status(404).json({ error: 'Order not found.' });
  }

  db.orders[orderIdx].status = status;
  db.orders[orderIdx].updatedAt = new Date().toISOString();
  writeDb(db);

  res.json({ success: true, order: db.orders[orderIdx] });
});

// 4. Contact Inquiries API
app.get('/api/contact', (req, res) => {
  const db = readDb();
  res.json({ contacts: db.contacts, count: db.contacts.length });
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, service = 'General Inquiry', message = '' } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const db = readDb();
  const msgId = `MSG-${Math.floor(100 + Math.random() * 900)}`;

  const newContact = {
    id: msgId,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone ? phone.trim() : '',
    service,
    message: message.trim(),
    status: 'new',
    createdAt: new Date().toISOString()
  };

  db.contacts.unshift(newContact);
  writeDb(db);

  res.status(201).json({
    success: true,
    message: 'Inquiry received. A specialist will reply within 1 hour.',
    contact: newContact
  });
});

// 5. Leads Capture API (Discount Promo)
app.get('/api/leads', (req, res) => {
  const db = readDb();
  res.json({ leads: db.leads, count: db.leads.length });
});

app.post('/api/leads', (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required.' });
  }

  const db = readDb();
  const cleanEmail = email.trim().toLowerCase();

  // Avoid duplicate spam
  const existing = db.leads.find(l => l.email === cleanEmail);
  if (existing) {
    return res.json({ success: true, message: 'Code already claimed.', code: existing.code });
  }

  const newLead = {
    id: `LEAD-${Math.floor(100 + Math.random() * 900)}`,
    email: cleanEmail,
    code: 'GLOBALLLC10',
    claimedAt: new Date().toISOString()
  };

  db.leads.unshift(newLead);
  writeDb(db);

  res.status(201).json({
    success: true,
    message: '10% Discount code unlocked!',
    code: newLead.code
  });
});

// 6. Website Readiness Check API
app.post('/api/readiness-check', (req, res) => {
  const { url, businessModel = 'E-commerce', country = 'United States' } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL required.' });
  }

  const cleanUrl = url.replace(/^https?:\/\//i, '').replace(/\/.*$/, '').trim();
  const db = readDb();

  // Generate deterministic/realistic diagnostic score
  const score = Math.floor(78 + Math.random() * 15);
  const auditId = `AUDIT-${Math.floor(100 + Math.random() * 900)}`;

  const auditRecord = {
    id: auditId,
    url: cleanUrl,
    businessModel,
    country,
    score,
    status: 'completed',
    scannedAt: new Date().toISOString()
  };

  db.audits.unshift(auditRecord);
  writeDb(db);

  res.json({
    success: true,
    audit: auditRecord
  });
});

app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`🚀 MR EXPERT SOLUTION API Server running on port ${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`📦 Orders Endpoint: http://localhost:${PORT}/api/orders`);
  console.log(`=================================================`);
});
