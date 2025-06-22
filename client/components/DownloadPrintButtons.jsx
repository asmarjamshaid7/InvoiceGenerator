import React, { useContext } from "react";
import html2pdf from "html2pdf.js";
import axios from "axios";
import { InvoiceContext } from "./InvoiceProvider";

export default function DownloadPrintButtons() {
  const { invoiceDetails, items } = useContext(InvoiceContext);

  // ✅ Download PDF Function
  const handleDownload = () => {
    const element = document.getElementById("invoice");
    html2pdf()
      .from(element)
      .save(`Invoice_${invoiceDetails.to || "client"}.pdf`);
  };

  // ✅ Print Button Function
  const handlePrint = () => {
    window.print();
  };

  // ✅ Save to Database Function
  const handleSaveToDatabase = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/invoices", {
        invoiceDetails,
        items,
      });

      if (response.status === 200) {
        alert("Invoice saved to database successfully!");
      } else {
        alert("Error saving invoice.");
      }
    } catch (error) {
      console.error("Database error:", error);
      alert("An error occurred while saving to the database.");
    }
  };

  return (
    <div className="flex justify-end mt-4 gap-4 print:hidden">
      <button
        onClick={handleDownload}
        className="bg-blue-600 px-4 py-2 text-white rounded"
      >
        Download
      </button>
      <button
        onClick={handlePrint}
        className="bg-gray-700 px-4 py-2 text-white rounded"
      >
        Print
      </button>
      <button
        onClick={handleSaveToDatabase}
        className="bg-green-600 px-4 py-2 text-white rounded"
      >
        Save
      </button>
    </div>
  );
}
