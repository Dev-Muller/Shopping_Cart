import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

const itens = document.querySelector('.products');
const produto = async () => {
  const response = await fetchProductsList('computador');
  const variable = response.forEach((e) => {
    const product = createProductElement(e);
    itens.appendChild(product);
  });
  return variable;
};
produto();
document.querySelector('.cep-button').addEventListener('click', searchCep);
