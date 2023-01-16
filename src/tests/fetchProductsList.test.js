import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', async () => {
    await fetchProductsList('computador');
    expect(typeof fetchProductsList).toBe('function');    
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('o retorno do fetchProductsList é igual ao objeto computadorSearch', async () => {
    const retorno = await fetchProductsList('computador');
    expect(retorno).toMatchObject(computadorSearch);
  });

  it('ao chamar a função fetchProductList sem argumento retorna um erro', async () => {
    await fetchProductsList('');
    expect(fetchProductsList).toThrow(new Error('Termo de busca não informado'));
  });
});
