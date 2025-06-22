import React, { useContext } from "react";
import { InvoiceContext } from "./InvoiceProvider";

export default function InvoiceItems() {
  const { items, setItems } = useContext(InvoiceContext);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] =
      field === "quantity" || field === "rate" ? Number(value) : value;
    setItems(updatedItems);
  };

  const addItem = () =>
    setItems([...items, { description: "", quantity: "", rate: "" }]);

  return (
    <div>
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2">Item</th>
            <th className="p-2">Qty</th>
            <th className="p-2">Rate</th>
            <th className="p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  className="bg-gray-800 p-2 w-full"
                  placeholder="Description..."
                  value={item.description}
                  onChange={(e) =>
                    handleItemChange(index, "description", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className="bg-gray-800 p-2 w-16"
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(index, "quantity", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  className="bg-gray-800 p-2 w-20"
                  type="number"
                  value={item.rate}
                  onChange={(e) =>
                    handleItemChange(index, "rate", e.target.value)
                  }
                />
              </td>
              <td className="p-2">${(item.quantity * item.rate).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addItem} className="Line-Btn">
        + Line Item
      </button>
    </div>
  );
}
