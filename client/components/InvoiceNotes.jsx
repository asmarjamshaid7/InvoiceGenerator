import React, { useContext } from "react";
import { InvoiceContext } from "./InvoiceProvider";

export default function InvoiceNotes() {
  const { invoiceDetails, setInvoiceDetails } = useContext(InvoiceContext);

  return (
    <div className="mt-6">
      <textarea
        className="bg-gray-800 p-2 w-full"
        placeholder="Notes – any relevant info..."
        value={invoiceDetails.notes}
        onChange={(e) =>
          setInvoiceDetails({ ...invoiceDetails, notes: e.target.value })
        }
      />
      <textarea
        className="bg-gray-800 p-2 w-full mt-2"
        placeholder="Terms and conditions..."
        value={invoiceDetails.termsCond}
        onChange={(e) =>
          setInvoiceDetails({ ...invoiceDetails, termsCond: e.target.value })
        }
      />
    </div>
  );
}
