import { setToLocalStorage } from "../utils/index.js";

export function saveData(data) {
  setToLocalStorage("chemicalSupplies", data);
}
