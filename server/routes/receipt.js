const express = require("express");
const router = express.Router();
const sql = require("mssql");

// POST: /api/invoices
router.post("/", async (req, res) => {
  const { invoiceDetails, items } = req.body;

  try {
    const request = new sql.Request();

    // Step 1: Insert into Invoices table
    const invoiceInsert = await request.query(`
      INSERT INTO Invoices (FromName, ToName, ShipTo, InvoiceDate, Terms, DueDate, PO, Notes, TermsCond, Paid)
      OUTPUT INSERTED.InvoiceID
      VALUES (
        '${invoiceDetails.from}',
        '${invoiceDetails.to}',
        '${invoiceDetails.shipTo}',
        '${invoiceDetails.date}',
        '${invoiceDetails.terms}',
        '${invoiceDetails.dueDate}',
        '${invoiceDetails.po}',
        '${invoiceDetails.notes}',
        '${invoiceDetails.termsCond}',
        ${invoiceDetails.paid}
      )
    `);

    const invoiceId = invoiceInsert.recordset[0].InvoiceID;

    // Step 2: Insert each item into InvoiceItems table
    for (const item of items) {
      await request.query(`
        INSERT INTO InvoiceItems (InvoiceID, Description, Quantity, Rate)
        VALUES (${invoiceId}, '${item.description}', ${item.quantity}, ${item.rate})
      `);
    }

    res.status(200).json({ message: "Invoice and items saved successfully" });
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ error: "Failed to save invoice" });
  }
});

module.exports = router;
