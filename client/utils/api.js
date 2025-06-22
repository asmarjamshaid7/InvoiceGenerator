export async function submitInvoice(data) {
  const res = await fetch("http://localhost:3000/api/invoice/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
