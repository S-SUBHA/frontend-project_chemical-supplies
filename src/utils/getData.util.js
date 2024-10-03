import { getFromLocalStorage } from "./index.js";

export async function getData() {
  const data =
    getFromLocalStorage("chemicalSupplies") ??
    (await fetch(
      "https://s-subha.github.io/frontend-project_chemical-supplies/data/data.json"
    )
      .then((res) => res.json())
      .catch((error) => console.log(`Error fetching Data: ${error}`)));

  return data;
}
