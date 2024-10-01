import { getCheckedRows } from "../utils/index.js";

export function deleteRows(element, dataSet) {
  const checkedRows = getCheckedRows(element);
  const checkedRowsIndices = checkedRows.map((row) => Number(row.id));

  // const checkedRowsIds = checkedRows.map((row) => Number((row.cells[1].children[0].value)));

  // dataSet = dataSet.filter((data) => !checkedRowsIds.includes(Number(data.id)));
  // return dataSet;

  const updatedData = [];
  for (let i = 0; i < dataSet.length; i++) {
    if (checkedRowsIndices.includes(i)) continue;
    updatedData.push(dataSet[i]);
  }

  return updatedData;
}
