export function toggleChecked(element) {
  element.type === "checkbox" && (element.checked = !element.checked);
}
