export const fetchProduct = () => {
  // seu código aqui
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
