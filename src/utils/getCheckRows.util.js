export function getCheckedRows(element) {
  // console.log(element.children[0].cells[0].firstChild.checked && element.children[0].cells[0].firstChild.id);

  const rows = Array.from(element.children);
  const res = rows.filter((row) => row.cells[0].firstChild.checked);
  // console.log(res);
  return res;
}
