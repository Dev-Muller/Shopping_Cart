export const fetchProduct = async (param) => {
  if (!param) {
    throw new Error('ID não informado');
  }
  // try {
  const API = `https://api.mercadolibre.com/items/${param}`;
  const response = await fetch(API);
  const data = await response.json();
  return data;
  // } catch (error) {
  //   throw new Error(error.message);
  // }
};

export const fetchProductsList = async (param) => {
  if (!param) {
    throw new Error('Termo de busca não informado');
  }
  // try {
  const API = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  // se nao usar async
  // return fetch(API)
  //   .then((response) => response.json())
  //   .then((data) => data.results)
  //   .catch((error) => {
  //     throw new Error(error.message);
  //   });
  // se usar async
  const response = await fetch(API);
  const data = await response.json();
  return data.results;
  // } catch (error) {
  //   throw new Error(error.message);
  // }
};
