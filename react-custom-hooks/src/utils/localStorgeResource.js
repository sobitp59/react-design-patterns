export const localStorageResource = (key) => async () => {
  return localStorage.getItem(key);
};
