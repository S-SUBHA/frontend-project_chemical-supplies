import { getFromLocalStorage } from "./index.js";

export async function getData() {
  const data =
    getFromLocalStorage("chemicalSupplies") ??
    (await fetch("../public/data.json")
      .then((res) => res.json())
      .catch((error) => console.error(error)));

  return data;
}
