import React from "react";
import InvoiceHeader from "../components/InvoiceHeader";
import InvoiceMeta from "../components/InvoiceMeta";
import InvoiceItems from "../components/InvoiceItems";
import InvoiceNotes from "../components/InvoiceNotes";
import InvoiceTotals from "../components/InvoiceTotals";
import DownloadPrintButtons from "../components/DownloadPrintButtons";
import { InvoiceProvider } from "../components/InvoiceProvider";
import "./App.css";
import "./index.css";

export default function InvoiceForm() {
  return (
    <InvoiceProvider>
      <form
        className="invoice-form mt-10 mb-10"
        id="invoice"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Wrap header and meta in a horizontal flex container */}
        <div className="flex justify-between gap-8 mb-6 flex-wrap">
          {/* Left side: Logo + From + To */}
          <div className="flex-1 min-w-[250px]">
            <InvoiceHeader />
          </div>

          {/* Right side: Invoice Date, Due Date, Terms, PO */}
          <div className="w-50% sm:w-[300px]">
            <InvoiceMeta />
          </div>
        </div>

        <InvoiceItems />
        <div className="flex justify-between gap-4 mt-6">
          <InvoiceNotes />
          <InvoiceTotals />
        </div>
        <DownloadPrintButtons />
      </form>
    </InvoiceProvider>
  );
}
