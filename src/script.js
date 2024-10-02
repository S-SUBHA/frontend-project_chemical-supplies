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
const idHeader = document.querySelector("#Id-header");
const chemicalNameHeader = document.querySelector("#Chemical-Name-header");
const vendorHeader = document.querySelector("#Vendor-header");
const densityHeader = document.querySelector("#Density-header");
const viscosityHeader = document.querySelector("#Viscosity-header");
const packagingHeader = document.querySelector("#Packaging-header");
const packSizeHeader = document.querySelector("#Pack-Size-header");
const unitHeader = document.querySelector("#Unit-header");
const quantityHeader = document.querySelector("#Quantity-header");

let dataSet = (await getData()) ?? [];

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

idHeader.addEventListener("click", (e) => {
  sortData(dataSet, e.target.innerText.toLowerCase());
  refresh(tBody, dataSet, createTr);
});

chemicalNameHeader.addEventListener("click", (e) => {
  sortData(dataSet, e.target.innerText.toLowerCase());
  refresh(tBody, dataSet, createTr);
});

vendorHeader.addEventListener("click", (e) => {
  sortData(dataSet, e.target.innerText.toLowerCase());
  refresh(tBody, dataSet, createTr);
});

densityHeader.addEventListener("click", (e) => {
  sortData(dataSet, e.target.innerText.toLowerCase());
  refresh(tBody, dataSet, createTr);
});

viscosityHeader.addEventListener("click", (e) => {
  sortData(dataSet, e.target.innerText.toLowerCase());
  refresh(tBody, dataSet, createTr);
});

packagingHeader.addEventListener("click", (e) => {
  sortData(dataSet, e.target.innerText.toLowerCase());
  refresh(tBody, dataSet, createTr);
});

packSizeHeader.addEventListener("click", (e) => {
  sortData(dataSet, e.target.innerText.toLowerCase());
  refresh(tBody, dataSet, createTr);
});

unitHeader.addEventListener("click", (e) => {
  sortData(dataSet, e.target.innerText.toLowerCase());
  refresh(tBody, dataSet, createTr);
});

quantityHeader.addEventListener("click", (e) => {
  sortData(dataSet, e.target.innerText.toLowerCase());
  refresh(tBody, dataSet, createTr);
});
