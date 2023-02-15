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
    expect(final.results).toEqual(product);
  });

  it('ao chamar a função fetchProducts sem argumento, retorna um erro', async () => {
    const result = await fetchProduct();
    expect(() => result).rejects.toThrow('ID não informado');
  });
});
