import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_FILE = path.join(__dirname, 'data', 'db.json');

// Initial seed schema
const initialData = {
  orders: [
    {
      id: "MES-2026-8492",
      companyName: "Apex Global Holdings LLC",
      fullName: "Malik Azan",
      email: "azan@apexglobal.com",
      phone: "+44 7911 123456",
      jurisdiction: "usa",
      packageName: "Gold",
      stateCode: "WY",
      addOns: ["itin", "us-phone"],
      totalPrice: 348,
      currency: "USD",
      status: "completed",
      createdAt: "2026-10-28T14:32:00.000Z"
    },
    {
      id: "MES-2026-8493",
      companyName: "Nexus Digital Ventures Ltd",
      fullName: "Talha Bhalli",
      email: "talha@nexus.agency",
      phone: "+92 300 1234567",
      jurisdiction: "uk",
      packageName: "Gold",
      stateCode: "UK",
      addOns: [],
      totalPrice: 170,
      currency: "GBP",
      status: "filed_with_state",
      createdAt: "2026-10-29T09:15:00.000Z"
    },
    {
      id: "MES-2026-8494",
      companyName: "CloudScale SaaS LLC",
      fullName: "Mohsin Ali",
      email: "mohsin@cloudscale.io",
      phone: "+971 50 1234567",
      jurisdiction: "usa",
      packageName: "Premium",
      stateCode: "DE",
      addOns: ["expedited-ein"],
      totalPrice: 389,
      currency: "USD",
      status: "in_review",
      createdAt: "2026-10-30T16:45:00.000Z"
    }
  ],
  contacts: [
    {
      id: "MSG-101",
      name: "Mudassir Kamal",
      email: "kamal@shopifybrand.de",
      phone: "+49 170 1234567",
      service: "Payment Gateway (Stripe/PayPal)",
      message: "Need help getting Stripe US approved for our German-owned Wyoming LLC.",
      createdAt: "2026-10-30T11:20:00.000Z",
      status: "responded"
    }
  ],
  leads: [
    {
      id: "LEAD-201",
      email: "founder@techgrowth.co",
      code: "GLOBALLLC10",
      claimedAt: "2026-10-30T10:10:00.000Z"
    }
  ],
  audits: [
    {
      id: "AUDIT-301",
      url: "apexbrand.com",
      businessModel: "E-commerce",
      country: "United States",
      score: 88,
      status: "completed",
      scannedAt: "2026-10-30T12:00:00.000Z"
    }
  ]
};

// Ensure data folder exists
const dataDir = path.dirname(DB_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf8');
}

export function readDb() {
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading DB file, returning initial data:', err);
    return initialData;
  }
}

export function writeDb(data) {
  try {
    // Atomic write to prevent file corruption
    const tempFile = `${DB_FILE}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf8');
    fs.renameSync(tempFile, DB_FILE);
    return true;
  } catch (err) {
    console.error('Error writing DB file:', err);
    return false;
  }
}
