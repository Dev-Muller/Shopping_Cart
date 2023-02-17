import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProducts é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado ao executar fetchProducts', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toBeCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProducts', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('fetchProducts com argumento computador é uma estrutura de dados', async () => {
    const final = await fetchProduct('MLB1405519561');
    expect(final).toEqual(product);
  });

  it('ao chamar a função fetchProducts sem argumento, retorna um erro', () => {
    expect(fetchProduct()).rejects.toThrow('ID não informado');
  });

  it('ao chamar fetchProducts com argumento errado, retorna um erro', async () => {
    await expect(fetchProduct('RequisicaoErrada')).rejects.toThrow();
  });
});
