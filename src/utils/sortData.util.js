export function sortData(dataSet, field, sortAscending = true) {
  sortAscending
    ? dataSet.sort((a, b) => (a[field] > b[field] ? 1 : -1))
    : dataSet.sort((a, b) => (a[field] < b[field] ? 1 : -1));
}
