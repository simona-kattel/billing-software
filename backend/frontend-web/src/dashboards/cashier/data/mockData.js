// src/data/mockData.js

export const products = [
  { id: 1, name: 'Organic Basmati Rice 5kg', sku: 'SKU-00412', category: 'Grains', price: 340, stock: 148, image: null },
  { id: 2, name: 'Amul Full Cream Milk 1L', sku: 'SKU-00218', category: 'Dairy', price: 85, stock: 240, image: null },
  { id: 3, name: 'Wai Wai Chicken Noodles', sku: 'SKU-00085', category: 'Instant Food', price: 25, stock: 320, image: null },
  { id: 4, name: 'Sunflower Cooking Oil 1L', sku: 'SKU-00531', category: 'Oils & Fats', price: 290, stock: 5, image: null },
  { id: 5, name: 'Tata Salt 1kg', sku: 'SKU-00102', category: 'Condiments', price: 42, stock: 2, image: null },
  { id: 6, name: 'Nescafé Classic 100g', sku: 'SKU-00198', category: 'Beverages', price: 450, stock: 4, image: null },
  { id: 7, name: 'Coca-Cola 500ml', sku: 'SKU-00334', category: 'Beverages', price: 65, stock: 56, image: null },
  { id: 8, name: 'Surf Excel Detergent 500g', sku: 'SKU-00287', category: 'Household', price: 180, stock: 0, image: null },
];

export const transactions = [
  { id: '#TXN-0091', customer: 'Rohan Sharma', phone: '+977-9841-234567', date: '22 Mar', time: '14:48', items: 4, payment: 'Cash', amount: 1416, status: 'Paid' },
  { id: '#TXN-0090', customer: 'Walk-in', phone: 'Guest', date: '22 Mar', time: '14:32', items: 6, payment: 'Cash', amount: 1240, status: 'Paid' },
  { id: '#TXN-0089', customer: 'Priya Shrestha', phone: null, date: '22 Mar', time: '14:18', items: 3, payment: 'Wallet', amount: 870, status: 'Paid' },
  { id: '#TXN-0088', customer: 'Anish Gurung', phone: null, date: '22 Mar', time: '13:55', items: 8, payment: 'Card', amount: 3400, status: 'Refunded' },
  { id: '#TXN-0087', customer: 'Walk-in', phone: 'Guest', date: '22 Mar', time: '13:41', items: 2, payment: 'Cash', amount: 560, status: 'Paid' },
  { id: '#TXN-0086', customer: 'Sunita KC', phone: null, date: '22 Mar', time: '13:20', items: 5, payment: 'Wallet', amount: 2180, status: 'Pending' },
];

export const lowStockAlerts = [
  { name: 'Tata Salt 1kg', sku: 'SKU-00102', left: 2 },
  { name: 'Surf Excel 500g', sku: 'SKU-00287', left: 1 },
  { name: 'Coca-Cola 500ml', sku: 'SKU-00334', left: 5 },
  { name: 'Nescafé Classic 100g', sku: 'SKU-00198', left: 4 },
];

export const topProducts = [
  { rank: '01', name: 'Organic Basmati Rice 5kg', units: 48, revenue: 16320 },
  { rank: '02', name: 'Amul Full Cream Milk', units: 112, revenue: 9520 },
  { rank: '03', name: 'Sunflower Cooking Oil 1L', units: 30, revenue: 8700 },
];

export const recentTransactions = [
  { id: '#TXN-0090', customer: 'Walk-in Customer', time: '14:32', amount: 1240, status: 'paid', avatar: '📧' },
  { id: '#TXN-0089', customer: 'Priya Shrestha', time: '14:18', amount: 870, status: 'paid', avatar: null },
  { id: '#TXN-0088', customer: 'Anish Gurung', time: '13:55', amount: 3400, status: 'refunded', avatar: null },
];

export const currentUser = {
  name: 'Kasim Rijal',
  initials: 'KR',
  role: 'Cashier',
  email: 'kasim@store.np',
  phone: '+977-9841-000123',
  store: 'KTM-001 — Kathmandu',
  shift: '#0842',
};

export const shiftHistory = [
  { id: '#0842', date: '22 Mar 2026', status: 'Active', hours: '08:00 – ongoing', txns: 91 },
  { id: '#0834', date: '21 Mar 2026', status: null, hours: '08:00 – 17:00', txns: 118 },
  { id: '#0826', date: '20 Mar 2026', status: null, hours: '08:00 – 16:30', txns: 104 },
  { id: '#0814', date: '19 Mar 2026', status: null, hours: '08:00 – 17:00', txns: 97 },
];

export const recentActivity = [
  { action: 'Completed transaction #TXN-0091', detail: 'Rs 1,416.25 · Cash', time: '14:48' },
  { action: 'Applied discount to #TXN-0091', detail: 'Seasonal Sale 10%', time: '14:46' },
  { action: 'Processed refund #TXN-0088', detail: 'Rs 3,400 · Card', time: '13:55' },
  { action: 'Login — Shift #0842 started', detail: 'kasim@store.np', time: '08:14', isLink: true },
];

export const hourlyData = [
  { hour: '8a', value: 20 }, { hour: '9a', value: 35 }, { hour: '10a', value: 45 },
  { hour: '11a', value: 60 }, { hour: '12p', value: 100 }, { hour: '1p', value: 75 },
  { hour: '2p', value: 50 }, { hour: '3p', value: 40 }, { hour: '4p', value: 35 },
  { hour: '5p', value: 30 }, { hour: '6p', value: 20 },
];
