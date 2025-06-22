import React, { createContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// eslint-disable-next-line react-refresh/only-export-components
export const InvoiceContext = createContext();

export function InvoiceProvider({ children }) {
  const [items, setItems] = useState([
    { description: "", quantity: 1, rate: 0 },
  ]);
  const [invoiceDetails, setInvoiceDetails] = useState({
    SenderName: "",
    RecieverName: "",
    ShipTo: "",
    Date: "",
    Terms: "",
    DueDate: "",
    PoNumber: "",
    Notes: "",
    PaymentTerms: "",
    Paid: 0,
    discount: 0,
    tax: 0,
    shipping: 0,
    logo: "",
  });

  return (
    <InvoiceContext.Provider
      value={{ items, setItems, invoiceDetails, setInvoiceDetails }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}
