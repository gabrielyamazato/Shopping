import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', async () => {
    await fetchProduct('MLB1405519561');
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561')
  });

  it('o retorno do fetchProduct é igual ao objeto', async () => {
    const hold = await fetchProduct('MLB1405519561');
    expect(hold).toMatchObject(product);
  });

  it('ao chamar a função sem argumentos retorna um erro', async () => {
    await expect(fetchProduct()).rejects.toThrow(new Error('ID não informado'))
  })
});
