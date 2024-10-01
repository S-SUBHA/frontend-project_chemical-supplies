export function refresh(element, dataSet, getChildren) {
  element.innerHTML = ``;
  let i = 0;
  dataSet.map((data) => element.appendChild(getChildren(data, i++)));
}
