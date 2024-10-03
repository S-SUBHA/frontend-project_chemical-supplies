import { getFromLocalStorage } from "./index.js";

export async function getData() {
  const data =
    getFromLocalStorage("chemicalSupplies") ??
    (await fetch("data/data.json")
      .then((res) => res.json())
      .catch((error) => console.log(`Error fetching Data: ${error}`)));

  return data;
}
