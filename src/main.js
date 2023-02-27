import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

const itens = document.querySelector('.products');
const cepInput = document.querySelector('.cep-input');
const cepbtn = document.querySelector('.cep-button');

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

cepbtn.addEventListener('click', async () => {
  const local = document.querySelector('.cart__address');
  await searchCep(cepInput.value, local);
});

const cartSavedProduct = async () => {
  const cartItens = document.querySelector('.cart__products');
  const productSavedId = getSavedCartIDs();
  const promiseArr = productSavedId.map((id) => fetchProduct(id));
  const finalPromise = await Promise.all(promiseArr);
  finalPromise.forEach((e) => {
    const product = createCartProductElement(e);
    cartItens.appendChild(product);
  });
};

window.onload = async () => {
  await cartSavedProduct();
  const cartFinalPrice = JSON.parse(localStorage.getItem('cartTotalPrice'));
  if (cartFinalPrice) {
    const result = document.querySelector('.total-price');
    result.innerHTML = cartFinalPrice;
  }
};
