import React, { useContext } from "react";
import { InvoiceContext } from "./InvoiceProvider";
import MUIDateField from "./MUIDateField";

export default function InvoiceMeta() {
  const { invoiceDetails, setInvoiceDetails } = useContext(InvoiceContext);

  // Helper function to update date fields
  const handleDateChange = (field, newValue) => {
    const isoDate = newValue ? newValue.toISOString().slice(0, 10) : "";
    setInvoiceDetails({ ...invoiceDetails, [field]: isoDate });
  };

  // Helper function to update text fields
  const handleChange = (field, value) => {
    setInvoiceDetails({ ...invoiceDetails, [field]: value });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100%",
      }}
    >
      {/* Invoice Number */}
      <div style={{ fontWeight: "bolder", fontSize: "40px" }}>Invoice #</div>
      <input
        type="text"
        placeholder="Invoice Number"
        value={invoiceDetails.invoiceNumber || ""}
        onChange={(e) => handleChange("invoiceNumber", e.target.value)}
        style={{
          lineHeight: "40px",
          paddingLeft: "10px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          width: "80%",
        }}
      />

      {/* Invoice Date */}
      <MUIDateField
        label="Invoice Date"
        value={invoiceDetails.date ? new Date(invoiceDetails.date) : null}
        onChange={(date) => handleDateChange("date", date)}
      />

      {/* Due Date */}
      <MUIDateField
        label="Due Date"
        value={invoiceDetails.dueDate ? new Date(invoiceDetails.dueDate) : null}
        onChange={(date) => handleDateChange("dueDate", date)}
      />

      {/* Payment Terms */}
      <input
        type="text"
        placeholder="Payment Terms"
        value={invoiceDetails.terms || ""}
        onChange={(e) => handleChange("terms", e.target.value)}
        style={{
          lineHeight: "40px",
          paddingLeft: "10px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          width: "100%",
        }}
      />

      {/* PO Number */}
      <input
        type="text"
        placeholder="PO Number"
        value={invoiceDetails.po || ""}
        onChange={(e) => handleChange("po", e.target.value)}
        style={{
          lineHeight: "40px",
          paddingLeft: "10px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          width: "100%",
        }}
      />
    </div>
  );
}
