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
    <div className="w-1/2 text-right space-y-2">
      <p>Subtotal: {subtotal.toFixed(2)}</p>
      {/* Discount */}
      {!showDiscountInput ? (
        <div className="TotalFont" onClick={() => setShowDiscountInput(true)}>
          + Discount
        </div>
      ) : (
        <div className="relative group inline-block">
          <button
            className="TotalsInputBtns"
            onClick={() => removeField("discount")}
          >
            X
          </button>

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
            className="invoiceTotalsInput"
          />
        </div>
      )}

      {/* Tax */}
      {!showTaxInput ? (
        <div className="TotalFont" onClick={() => setShowTaxInput(true)}>
          + Tax
        </div>
      ) : (
        <div className="relative group inline-block">
          <button
            className="TotalsInputBtns"
            onClick={() => removeField("tax")}
          >
            X
          </button>
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
            className="invoiceTotalsInput"
          />
        </div>
      )}

      {/* Shipping */}
      {!showShippingInput ? (
        <div className="TotalFont" onClick={() => setShowShippingInput(true)}>
          + Shipping
        </div>
      ) : (
        <div className="relative group inline-block">
          <button
            className="TotalsInputBtns"
            onClick={() => removeField("shipping")}
          >
            X
          </button>
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
            className="invoiceTotalsInput"
          />
        </div>
      )}

      {/* Totals */}

      <div className="flex justify-end gap-4">
        <p>Total:</p>
        <p>{totalAfterDiscount.toFixed(2)}</p>
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
        <p>{balanceDue.toFixed(2)}</p>
      </div>
    </div>
  );
}
