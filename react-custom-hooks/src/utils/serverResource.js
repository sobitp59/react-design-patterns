export const serverResource = (resourceUrl) => async () => {
  const response = await fetch(resourceUrl);
  const data = await response.json();
  return data;
};
