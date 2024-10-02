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

let sampleData = (await getData()) ?? [];

(() => {
  let i = 0;
  Array.isArray(sampleData) &&
    sampleData.forEach((data) => {
      tBody.appendChild(createTr(data, i++));
    });
})();

// Toolbar-buttons
addRowBtn.addEventListener("click", () => {
  addRow(sampleData);
  refresh(tBody, sampleData, createTr);
});

refreshBtn.addEventListener("click", () => {
  getData()
    .then((data) => (sampleData = data || []))
    .then(() => refresh(tBody, sampleData, createTr))
    .catch((error) => console.error(error));
});

moveUpBtn.addEventListener("click", () => {
  moveRowUp(tBody, sampleData);
  refresh(tBody, sampleData, createTr);
});

moveDownBtn.addEventListener("click", () => {
  moveRowDown(tBody, sampleData);
  refresh(tBody, sampleData, createTr);
});

deleteBtn.addEventListener("click", () => {
  sampleData = deleteRows(tBody, sampleData);
  refresh(tBody, sampleData, createTr);
});

saveBtn.addEventListener("click", () => {
  saveData(sampleData);
});

// Table-headers
selectAllHeader.addEventListener("click", (e) => {
  const rows = Array.from(tBody.children);
  rows.forEach((row) => toggleChecked(row.cells[0].children[0]));
});

idHeader.addEventListener("click", (e) => {
  sortData(sampleData, e.target.innerText.toLowerCase());
  refresh(tBody, sampleData, createTr);
});

chemicalNameHeader.addEventListener("click", (e) => {
  sortData(sampleData, e.target.innerText.toLowerCase());
  refresh(tBody, sampleData, createTr);
});

vendorHeader.addEventListener("click", (e) => {
  sortData(sampleData, e.target.innerText.toLowerCase());
  refresh(tBody, sampleData, createTr);
});

densityHeader.addEventListener("click", (e) => {
  sortData(sampleData, e.target.innerText.toLowerCase());
  refresh(tBody, sampleData, createTr);
});

viscosityHeader.addEventListener("click", (e) => {
  sortData(sampleData, e.target.innerText.toLowerCase());
  refresh(tBody, sampleData, createTr);
});

packagingHeader.addEventListener("click", (e) => {
  sortData(sampleData, e.target.innerText.toLowerCase());
  refresh(tBody, sampleData, createTr);
});

packSizeHeader.addEventListener("click", (e) => {
  sortData(sampleData, e.target.innerText.toLowerCase());
  refresh(tBody, sampleData, createTr);
});

unitHeader.addEventListener("click", (e) => {
  sortData(sampleData, e.target.innerText.toLowerCase());
  refresh(tBody, sampleData, createTr);
});

quantityHeader.addEventListener("click", (e) => {
  sortData(sampleData, e.target.innerText.toLowerCase());
  refresh(tBody, sampleData, createTr);
});
