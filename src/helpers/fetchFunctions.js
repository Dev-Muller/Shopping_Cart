export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (param) => {
  if (!param) {
    throw new Error('Termo de busca não informado');
  }
  // try {
  const API = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  // se nao usar async
  // fetch(API)
  //   .then((response) => response.json())
  //   .then((data) => data.results);
  // se usar async
  const response = await fetch(API);
  const data = response.json();
  return data.then(({ results }) => results);
  // } catch {
  //   alert(Error.message);
  // }
};
