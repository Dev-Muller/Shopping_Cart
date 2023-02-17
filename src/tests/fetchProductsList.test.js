import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toBeCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('fetchProductsList com argumento computador é uma estrutura de dados', async () => {
    const final = await fetchProductsList('computador');
    expect(final).toEqual(computadorSearch);
  });

  it('ao chamar a função fetchProductsList sem argumento, retorna um erro', () => {
    expect(fetchProductsList()).rejects.toThrow('Termo de busca não informado');
  });

  it('ao chamar fetchProductsList com argumento errado, retorna um erro', async () => {
    await expect(fetchProductsList('RequisicaoErrada')).rejects.toThrow();
  });
});
