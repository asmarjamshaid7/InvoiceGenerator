import React, { useContext } from "react";
import { InvoiceContext } from "./InvoiceProvider";
import MUIDateField from "./MUIDateField";

export default function InvoiceMeta() {
  const { invoiceDetails, setInvoiceDetails } = useContext(InvoiceContext);

  const handleDateChange = (field, newValue) => {
    const isoDate = newValue ? newValue.toISOString().slice(0, 10) : "";
    setInvoiceDetails({ ...invoiceDetails, [field]: isoDate });
  };

  return (
    <div className="my-6 flex flex-col gap-4">
      {/* Invoice Date */}
      <MUIDateField
        label="Invoice Date"
        value={invoiceDetails.date ? new Date(invoiceDetails.date) : null}
        onChange={(date) => handleDateChange("date", date)}
        className="invoice-meta-input"
      />

      {/* Due Date */}
      <MUIDateField
        label="Due Date"
        value={invoiceDetails.dueDate ? new Date(invoiceDetails.dueDate) : null}
        onChange={(date) => handleDateChange("dueDate", date)}
        className="invoice-meta-input"
      />

      {/* Payment Terms */}
      <input
        className="invoice-meta-input"
        placeholder="Payment Terms"
        value={invoiceDetails.terms}
        onChange={(e) =>
          setInvoiceDetails({ ...invoiceDetails, terms: e.target.value })
        }
      />

      {/* PO Number */}
      <input
        className="invoice-meta-input"
        placeholder="PO"
        value={invoiceDetails.po}
        onChange={(e) =>
          setInvoiceDetails({ ...invoiceDetails, po: e.target.value })
        }
      />
    </div>
  );
}
