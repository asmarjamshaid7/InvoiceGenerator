const config = {
  user: "invoice_user", // ✅ SQL login you created
  password: "12345", // 🔐 SQL password you set
  server: "localhost", // 🖥️ Local SQL Server
  database: "InvoiceGenerator",
  options: {
    encrypt: false, // ✅ turn off SSL encryption (for local dev)
    trustServerCertificate: true, // ✅ accept self-signed cert
  },
};

module.exports = config;
