export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (parametro) => {
  if (parametro === '') {
    throw new Error('Termo de busca não informado');
  }

  const resposta = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${parametro}`);
  const dados = resposta.json();

  return dados;
};
