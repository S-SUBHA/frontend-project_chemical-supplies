import { getCheckedRows } from "../utils/index.js";

export function moveRowDown(element, data){
  const checkedRows = getCheckedRows(element);
  const checkedRowsIndices = checkedRows.map((row) => Number(row.id));
  // console.log(checkedRowsIndices);

  for (let i = data.length - 2; i >= 0; i--) {
    if (!checkedRowsIndices.includes(i)) continue;
    const tempData = data[i + 1];
    data[i + 1] = data[i];
    data[i] = tempData;
  }
}