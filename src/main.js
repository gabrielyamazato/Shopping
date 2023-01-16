import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const produtoHTML = document.querySelector('.products');

const productGrid = async () => {
  const dataProductsList = await fetchProductsList('computer');

  dataProductsList.forEach((element) => {
    produtoHTML.appendChild(createProductElement(element));
  });
};
productGrid();
