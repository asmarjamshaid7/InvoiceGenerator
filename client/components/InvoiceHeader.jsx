import React, { useContext } from "react";
import { InvoiceContext } from "./InvoiceProvider";

export default function InvoiceHeader() {
  const { invoiceDetails, setInvoiceDetails } = useContext(InvoiceContext);

  // Handle logo upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setInvoiceDetails({ ...invoiceDetails, logo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Remove logo
  const handleLogoRemove = () => {
    setInvoiceDetails({ ...invoiceDetails, logo: "" });
  };

  return (
    <div className="flex justify-between items-start mb-6">
      {/* Left side: Logo + From/To/ShipTo */}
      <div className="flex flex-col gap-4">
        {/* Logo Section */}
        <div className="flex items-start gap-4">
          {invoiceDetails.logo ? (
            <div className="image">
              <img
                src={invoiceDetails.logo}
                alt="Logo"
                className="w-full h-full object-contain border border-gray-300 rounded"
              />
              <button
                onClick={handleLogoRemove}
                className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1 rounded-full"
              >
                X
              </button>
            </div>
          ) : (
            <label className="image">
              + Add Your Design
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
              />
            </label>
          )}
        </div>

        {/* Form Inputs: From, To, Ship To */}
        <input
          className="input-from"
          placeholder="Who is this from?"
          value={invoiceDetails.from}
          onChange={(e) =>
            setInvoiceDetails({ ...invoiceDetails, from: e.target.value })
          }
        />
        <input
          className="input-to"
          placeholder="Who is this to?"
          value={invoiceDetails.to}
          onChange={(e) =>
            setInvoiceDetails({ ...invoiceDetails, to: e.target.value })
          }
        />
        <input
          className="input-to"
          placeholder="Ship To (optional)"
          value={invoiceDetails.shipTo}
          onChange={(e) =>
            setInvoiceDetails({ ...invoiceDetails, shipTo: e.target.value })
          }
        />
      </div>

      {/* Right side: INVOICE + ID */}
      <div className="text-right">
        <h2 className="text-3xl font-bold">INVOICE</h2>
        <input className="input-from mt-2" />
      </div>
    </div>
  );
}
