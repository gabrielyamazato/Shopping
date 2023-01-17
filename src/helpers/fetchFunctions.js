export const fetchProduct = async (par) => {
  if (!par) {
    throw new Error('ID não informado')
  } else {
    const response = await fetch(`https://api.mercadolibre.com/items/${par}`);
    const data = response.json();

    return data
  }
};

export const fetchProductsList = async (parametro) => {
  if (!parametro) {
    throw new Error('Termo de busca não informado');
  } else {
    const resposta = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${parametro}`);
    const dados = await resposta.json();

    return dados.results;
  }
};
