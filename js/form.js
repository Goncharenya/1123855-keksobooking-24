const adForm = document.querySelector('.ad-form');
const adMapFormChildren = adForm.children;
const formFilters = document.querySelector('.map__filters');
const adFiltersFormChildren = formFilters.children;
const formElements = [...adMapFormChildren, ...adFiltersFormChildren];

export const formDisable = () => {
  adForm.classList.add('ad-form--disabled');
  formFilters.classList.add('ad-form--disabled');

  for (const elem of formElements) {
    elem.setAttribute('disabled', 'disabled');
  }
};

export const formActive = () => {
  adForm.classList.remove('ad-form--disabled');
  formFilters.classList.remove('ad-form--disabled');

  for (const elem of formElements) {
    elem.removeAttribute('disabled', 'disabled');
  }
};

