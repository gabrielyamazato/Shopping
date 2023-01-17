import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const produtoHTML = document.querySelector('.products');

const removeLoading = () => {
  const getBody = document.querySelector('body');
  const getH1 = document.querySelector('h1');

  getBody.removeChild(getH1);
};

const errorLoading = () => {
  const containerError = document.querySelector('body');
  const e = document.createElement('h1');
  e.className = 'error';
  e.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';

  containerError.appendChild(e);
};

const productGrid = async () => {
  try {
    const dataProductsList = await fetchProductsList('computer');

    dataProductsList.forEach((element) => {
      produtoHTML.appendChild(createProductElement(element));
    });
    removeLoading();
  } catch (error) {
    console.log(error);
    errorLoading();
  }
};

const loading = () => {
  const containerLoading = document.querySelector('body');
  const x = document.createElement('h1');
  x.className = 'loading';
  x.innerText = 'carregando...';

  containerLoading.appendChild(x);
};

function loadScreen() {
  try {
    loading();
    productGrid();
  } catch (error) {
    console.log(error);
  }
}
loadScreen();
