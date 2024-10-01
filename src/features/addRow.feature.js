export function addRow(data) {
  const row = {
    id: data.length ? data.slice(-1)[0].id + 1 : 1,
    "Chemical name": "",
    Vendor: "",
    Density: "",
    Viscosity: "",
    Packaging: "",
    "Pack size": "",
    Unit: "",
    Quantity: "",
  };

  data.push(row);
}
