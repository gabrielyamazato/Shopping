export const getAddress = async (input) => {
  const API_1 = fetch(`https://cep.awesomeapi.com.br/json/${input}`);
  const API_2 = fetch(`https://brasilapi.com.br/api/cep/v2/${input}`);

  return Promise.any([API_1, API_2])
    .then((primeiraResposta) => primeiraResposta.json())
    .then((res) => {
      if (res.neighborhood === true) {
        return `${res.street} - ${res.neighborhood} - ${res.city} - ${res.state}`;
      }
      return `${res.address} - ${res.district} - ${res.city} - ${res.state}`;
    })
    .catch(() => 'CEP não encontrado');
};

export const searchCep = async () => {
  const input = document.querySelector('.cep-input').value;
  const span = document.querySelector('.cart__address');
  const info = getAddress(input);

  Promise.all([info])
    .then((resposta) => {
      const xd = resposta[0];
      if (xd === 'undefined - undefined - undefined - undefined') {
        span.innerText = 'CEP não encontrado';
      } else {
        span.innerText = xd;
      }
    });
};
