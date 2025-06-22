import React, { useContext } from "react";
import { InvoiceContext } from "./InvoiceProvider";

export default function InvoiceNotes() {
  const { invoiceDetails, setInvoiceDetails } = useContext(InvoiceContext);

  return (
    <div className="w-1/2 flex flex-col gap-4">
      <textarea
        className="InvoiceNotes"
        placeholder="Notes – any relevant info..."
        value={invoiceDetails.notes}
        onChange={(e) =>
          setInvoiceDetails({ ...invoiceDetails, notes: e.target.value })
        }
      />
      <textarea
        className="InvoiceNotes"
        placeholder="Terms and conditions..."
        value={invoiceDetails.termsCond}
        onChange={(e) =>
          setInvoiceDetails({ ...invoiceDetails, termsCond: e.target.value })
        }
      />
    </div>
  );
}
