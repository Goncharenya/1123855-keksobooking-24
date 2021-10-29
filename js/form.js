

const adForm = document.querySelector('.ad-form');
const formFilters = document.querySelector('.map__filters');
const fieldsetInput = formFilters.children;
//const fieldsetOption = formFilters.children;

export const formDisable = () => {
  adForm.classList.add('ad-form--disabled');
  formFilters.classList.add('ad-form--disabled');
  fieldsetInput.forEach((elem) => {
    elem.setAttribute('disabled', 'disabled');
  });

  // fieldsetOption.forEach((elem) => {
  //   elem.setAttribute('disabled', 'disabled');
  // });
};

formDisable();

export const formActive = () => {
  adForm.classList.remove('ad-form--disabled');
  formFilters.classList.remove('ad-form--disabled');

  fieldsetInput.forEach((elem) => {
    elem.removeAttribute('disabled');
  });
  // fieldsetOption.forEach((elem) => {
  //   elem.removeAttribute('disabled');
  // });
};

formActive();
