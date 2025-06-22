import React, { useContext, useState } from "react";
import { InvoiceContext } from "./InvoiceProvider";

export default function InvoiceTotals() {
  const { items, invoiceDetails, setInvoiceDetails } =
    useContext(InvoiceContext);

  const [showDiscountInput, setShowDiscountInput] = useState(false);
  const [showTaxInput, setShowTaxInput] = useState(false);
  const [showShippingInput, setShowShippingInput] = useState(false);

  const subtotal = items.reduce(
    (acc, item) => acc + item.quantity * item.rate,
    0
  );

  const discount = Number(invoiceDetails.discount) || 0;
  const tax = Number(invoiceDetails.tax) || 0;
  const shipping = Number(invoiceDetails.shipping) || 0;

  const totalAfterDiscount = subtotal - discount + tax + shipping;
  const balanceDue = totalAfterDiscount - Number(invoiceDetails.paid);

  const removeField = (field) => {
    setInvoiceDetails({ ...invoiceDetails, [field]: "" });

    if (field === "discount") setShowDiscountInput(false);
    if (field === "tax") setShowTaxInput(false);
    if (field === "shipping") setShowShippingInput(false);
  };

  return (
    <div className="mt-6 text-right space-y-2">
      {/* Discount */}
      {!showDiscountInput ? (
        <div
          className="text-blue-600 cursor-pointer hover:underline"
          onClick={() => setShowDiscountInput(true)}
        >
          + Discount
        </div>
      ) : (
        <div className="relative group inline-block">
          <input
            type="number"
            placeholder="Discount"
            value={invoiceDetails.discount}
            onChange={(e) =>
              setInvoiceDetails({
                ...invoiceDetails,
                discount: e.target.value,
              })
            }
            className="bg-gray-800 p-2 w-40 text-right rounded"
          />
          <button
            className="absolute -right-4 -top-2 text-red-500 text-sm"
            onClick={() => removeField("discount")}
          >
            X
          </button>
        </div>
      )}

      {/* Tax */}
      {!showTaxInput ? (
        <div
          className="text-blue-600 cursor-pointer hover:underline"
          onClick={() => setShowTaxInput(true)}
        >
          + Tax
        </div>
      ) : (
        <div className="relative group inline-block">
          <input
            type="number"
            placeholder="Tax"
            value={invoiceDetails.tax}
            onChange={(e) =>
              setInvoiceDetails({
                ...invoiceDetails,
                tax: e.target.value,
              })
            }
            className="bg-gray-800 p-2 w-40 text-right rounded"
          />
          <button
            className="absolute -right-4 -top-2 text-red-500 text-sm"
            onClick={() => removeField("tax")}
          >
            X
          </button>
        </div>
      )}

      {/* Shipping */}
      {!showShippingInput ? (
        <div
          className="text-blue-600 cursor-pointer hover:underline"
          onClick={() => setShowShippingInput(true)}
        >
          + Shipping
        </div>
      ) : (
        <div className="relative group inline-block">
          <input
            type="number"
            placeholder="Shipping"
            value={invoiceDetails.shipping}
            onChange={(e) =>
              setInvoiceDetails({
                ...invoiceDetails,
                shipping: e.target.value,
              })
            }
            className="bg-gray-800 p-2 w-40 text-right rounded"
          />
          <button
            className="absolute -right-4 -top-2 text-red-500 text-sm"
            onClick={() => removeField("shipping")}
          >
            X
          </button>
        </div>
      )}

      {/* Totals */}
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Discount: -${discount.toFixed(2)}</p>
      <div className="flex justify-end gap-4">
        <p>Total:</p>
        <p>${totalAfterDiscount.toFixed(2)}</p>
      </div>

      {/* Amount Paid */}
      <input
        className="bg-gray-800 p-2 w-40 text-right rounded"
        placeholder="Amount Paid"
        type="number"
        value={invoiceDetails.paid}
        onChange={(e) =>
          setInvoiceDetails({ ...invoiceDetails, paid: e.target.value })
        }
      />

      {/* Balance Due */}
      <div className="flex justify-end gap-4">
        <p>Balance Due:</p>
        <p>${balanceDue.toFixed(2)}</p>
      </div>
    </div>
  );
}
