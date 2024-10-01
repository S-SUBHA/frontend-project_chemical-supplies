import { getCheckedRows } from "../utils/index.js";

export function moveRowUp(element, data){
  const checkedRows = getCheckedRows(element);
  const checkedRowsIndices = checkedRows.map((row) => Number(row.id));
  console.log(checkedRowsIndices);

  for (let i = 1; i < data.length; i++) {
    if (!checkedRowsIndices.includes(i)) continue;
    const tempData = data[i - 1];
    data[i - 1] = data[i];
    data[i] = tempData;
  }
}