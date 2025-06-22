const express = require("express");
const cors = require("cors");
const sql = require("mssql");
const config = require("./db/sqlconfig"); // Your DB config file
const invoiceRoutes = require("./routes/receipt"); // Route to handle invoice logic

const app = express();
const PORT = 5000; // You can change this if needed

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Connect to MSSQL
sql
  .connect(config)
  .then(() => console.log("✅ Connected to MSSQL database"))
  .catch((err) => console.error("❌ Database connection failed:", err));

// Routes
app.use("/api/invoices", invoiceRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
