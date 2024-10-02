export function getFromLocalStorage(key) {
  const data = JSON.parse(localStorage.getItem(key));

  return data;
  // if (data && Array.isArray(data) && data.length > 0) return data;
  // return [];
}

export function setToLocalStorage(key, data) {
  if (data) {
    if (Array.isArray(data) && data.length > 0)
      localStorage.setItem(key, JSON.stringify(data));
    else localStorage.clear();
  }
}
