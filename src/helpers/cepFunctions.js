export const getAddress = async (input) => {
  try {
    const API_1 = fetch(`https://cep.awesomeapi.com.br/json/${input}`);
    const API_2 = fetch(`https://brasilapi.com.br/api/cep/v2/${input}`);

    return Promise.any([API_1, API_2])
      .then((primeiraResposta) => primeiraResposta.json())
      .then((resposta) => {
        if (resposta.neighborhood === true) {
          return `${resposta.street} - ${resposta.neighborhood} - ${resposta.city} - ${resposta.state}`;
        }
        return `${resposta.address} - ${resposta.district} - ${resposta.city} - ${resposta.state}`;
      });
  } catch (error) {
    console.log(error);
  }
};

const span = document.querySelector('.cart__adress');

export const searchCep = async () => {
  const input = document.querySelector('.cep-input').value;
  const info = await getAddress(input);

  if (info === 'undefined - undefined - undefined - undefined') {
    return span.innerText = 'CEP não encontrado';
  } else {
    return span.innerText = info;
  }
};