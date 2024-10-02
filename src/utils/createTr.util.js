export function createTr(data, rowId) {
  const numbers = ["id", "density", "viscosity", "quantity"];

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

  for (const Key in data) {
    const key = Key.toLowerCase();

    const td = document.createElement("td");
    const input = document.createElement("input");

    input.id = `${key}${rowId}`;

    if (key === "id") input.disabled = true;

    if (numbers.includes(key)) input.type = "number";

    input.value = numbers.includes(key) ? Number(data[Key]) : data[Key];

    input.addEventListener("change", (e) => {
      data[Key] = numbers.includes(key)
        ? Number(e.target.value)
        : e.target.value;
    });

    td.appendChild(input);
    tr.appendChild(td);
  }

  return tr;
}
