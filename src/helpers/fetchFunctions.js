export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (param) => {
  if (!param) {
    throw new Error('Termo de busca não informado');
  }
  try {
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
  } catch (error) {
    throw new Error(error.message);
  }
};
