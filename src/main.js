import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

const itens = document.querySelector('.products');

const produto = async (param) => {
  const response = await fetchProductsList(param);
  response.forEach((e) => {
    const product = createProductElement(e);
    itens.appendChild(product);
  });
};

const loading = async (param) => {
  const loadingText = document.createElement('p');
  loadingText.innerHTML = 'Carregando...';
  loadingText.classList.add('loading');
  itens.appendChild(loadingText);
  await produto(param);
  itens.removeChild(loadingText);
};

const loadingError = async () => {
  const loadingTextError = document.querySelector('.loading');
  loadingTextError.innerHTML = 'Algum erro ocorreu, '
  + 'recarregue a página e tente novamente';
  loadingTextError.className = 'error';
};

const condition = async () => {
  try {
    await loading('computador');
  } catch (error) {
    loadingError();
  }
};
condition();

document.querySelector('.cep-button').addEventListener('click', searchCep);
