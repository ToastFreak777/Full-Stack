export const isPersistedState = (key: string) => {
  const localstorage = localStorage.getItem(key);
  console.log(localstorage);
  return localstorage && JSON.parse(localstorage);
};
