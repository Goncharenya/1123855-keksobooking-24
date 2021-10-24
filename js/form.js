import {mapCanvas} from './generator-elements.js';

const adForm = document.querySelector('.ad-form');
const formFilters = document.querySelector('.map__filters');
//const adFormFieldset = formFilters.querySelectorAll('fieldset');
const fieldsetInput = formFilters.querySelectorAll('input');
const fieldsetOption = formFilters.querySelectorAll('option');

const formDisable = () => {
  adForm.classList.add('ad-form--disabled');
  fieldsetInput.forEach((elem) => {
    elem.setAttribute('disabled', 'disabled');
  });

  fieldsetOption.forEach((elem) => {
    elem.setAttribute('disabled', 'disabled');
  });
};

formDisable();

const formActive = () => {
  mapCanvas.addEventListener('load', () => adForm.classList.remove('ad-form--disabled'));

};

formActive();
