export function sortData(dataSet, field) {
  dataSet.sort((a, b) => (a[field] > b[field] ? 1 : -1));
}
