export function addRow(data) {
  let id = 0;
  data.forEach(val => id = Math.max(val.id, id));
  
  const row = {
    id: id + 1,
    "chemical name": "",
    vendor: "",
    density: "",
    viscosity: "",
    packaging: "",
    "pack size": "",
    unit: "",
    quantity: "",
  };

  data.push(row);
}
