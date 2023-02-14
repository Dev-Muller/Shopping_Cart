import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', async () => {
    await expect(typeof fetchProductsList).toBeDefined();
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    fetchProductsList('computador');
    await expect(fetch).toBeCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    fetchProductsList('computador');
    await expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('fetchProductsList com argumento computador é uma estrutura de dados', async () => {
    const final = await fetchProductsList('computador');
    expect(final.results).toEqual(computadorSearch);
  });

  it('ao chamar a função fetchProductsList sem argumento, retorna um erro', async () => {
    const result = fetchProductsList();
    await expect(() => result).rejects.toThrow('Termo de busca não informado');
  });
});
