import {
  addRow,
  deleteRows,
  moveRowDown,
  moveRowUp,
  refresh,
  saveData,
} from "./features/index.js";
import { createTr, getData, sortData, toggleChecked } from "./utils/index.js";

const addRowBtn = document.querySelector("#add-row");
const moveDownBtn = document.querySelector("#move-down");
const moveUpBtn = document.querySelector("#move-up");
const deleteBtn = document.querySelector("#delete");
const refreshBtn = document.querySelector("#refresh");
const saveBtn = document.querySelector("#save");

const tBody = document.querySelector("#ct-body");

const selectAllHeader = document.querySelector("#Select-All-header");
const tableHeaders = [
  document.querySelector("#Id-header"),
  document.querySelector("#Chemical-Name-header"),
  document.querySelector("#Vendor-header"),
  document.querySelector("#Density-header"),
  document.querySelector("#Viscosity-header"),
  document.querySelector("#Packaging-header"),
  document.querySelector("#Pack-Size-header"),
  document.querySelector("#Unit-header"),
  document.querySelector("#Quantity-header"),
];

let dataSet = (await getData()) ?? [];
let sortedAscending = false;

(() => {
  let i = 0;
  Array.isArray(dataSet) &&
    dataSet.forEach((data) => {
      tBody.appendChild(createTr(data, i++));
    });
})();

// Toolbar-buttons
addRowBtn.addEventListener("click", () => {
  addRow(dataSet);
  refresh(tBody, dataSet, createTr);
});

refreshBtn.addEventListener("click", () => {
  getData()
    .then((data) => (dataSet = data || []))
    .then(() => refresh(tBody, dataSet, createTr))
    .catch((error) => console.error(error));
});

moveUpBtn.addEventListener("click", () => {
  moveRowUp(tBody, dataSet);
  refresh(tBody, dataSet, createTr);
});

moveDownBtn.addEventListener("click", () => {
  moveRowDown(tBody, dataSet);
  refresh(tBody, dataSet, createTr);
});

deleteBtn.addEventListener("click", () => {
  dataSet = deleteRows(tBody, dataSet);
  refresh(tBody, dataSet, createTr);
});

saveBtn.addEventListener("click", () => {
  saveData(dataSet);
});

// Table-headers
selectAllHeader.addEventListener("click", (e) => {
  const rows = Array.from(tBody.children);
  rows.forEach((row) => toggleChecked(row.cells[0].children[0]));
});

tableHeaders.forEach((tableHeader) => {
  tableHeader.addEventListener("click", (e) => {
    sortedAscending = !sortedAscending;
    sortData(dataSet, e.target.innerText.toLowerCase(), sortedAscending);
    refresh(tBody, dataSet, createTr);
  });
});
