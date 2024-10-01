export function createTr(data, rowId) {
  const numbers = ["id", "Density", "Viscosity", "Quantity"];

  const tr = document.createElement("tr");
  tr.id = rowId;

  (() => {
    const td = document.createElement("td");
    const checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.id = `cb${rowId}`;
    td.appendChild(checkBox);
    tr.appendChild(td);
  })();

  for (const key in data) {
    const td = document.createElement("td");
    const input = document.createElement("input");
    input.value = data[key];
    input.id = `${key}${rowId}`;
    if (key === "id") input.disabled = true;

    input.addEventListener("change", (e) => {
      data[key] = numbers.includes(key)
        ? Number(e.target.value)
        : e.target.value;
      // console.log(data);
    });

    td.appendChild(input);
    tr.appendChild(td);
  }

  return tr;
}
