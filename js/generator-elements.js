import './data.js';
import {createArray} from './data.js';
import {FORMATTED_TYPES} from './names.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('.map__canvas');
const ads = createArray();

const randomName = (elem, value) => {
  if (value){
    elem.textContent = value;
  } else {
    elem.style.display = 'none';
  }
};

const generateCard = (i) => {
  const cardContent = cardTemplate.cloneNode(true);
  randomName(cardContent.querySelector('.popup__title'), ads[i].offer.title);
  randomName(cardContent.querySelector('.popup__text--address'), ads[i].offer.address);
  randomName(cardContent.querySelector('.popup__text--price'), `${ads[i].offer.price} ₽/ночь`);
  randomName(cardContent.querySelector('.popup__type'), FORMATTED_TYPES[ads[i].offer.type]);
  randomName(cardContent.querySelector('.popup__text--capacity'), `${ads[i].offer.rooms} комнаты для ${ads[0].offer.guests} гостей`);
  randomName(cardContent.querySelector('.popup__text--capacity'), `Заезд после ${ads[i].offer.checkin}, выезд до ${ads[0].offer.checkout}`);
  const featuresElements = cardContent.querySelectorAll('.popup__feature');
  randomName(cardContent.querySelector('.popup__description'), ads[i].offer.description);
  const avatarElem = cardContent.querySelector('.popup__avatar');

  if (ads[i].author.avatar){
    avatarElem.src = ads[i].author.avatar;
  } else {
    avatarElem.style.display = 'none';
  }

  const photoElem = cardContent.querySelector('.popup__photo');
  const photosContainer = cardContent.querySelector('.popup__photos');
  photosContainer.innerHTML = '';

  for (let j = 0; j < ads[j].offer.photos.length; j++) {
    const photoClone = photoElem.cloneNode(true);
    photoClone.src = ads[i].offer.photos[i];
    photosContainer.appendChild(photoClone);
  }

  const features = ads[i].offer.feature.map( (item) => `popup__feature--${item}`);

  featuresElements.forEach( (elem) => {
    if (!features.includes(elem.classList[1])){
      elem.remove();
    }
  });
  return cardContent;
};
const cardArr = [];

for (let i = 0; i < 10; i++){
  cardArr.push(generateCard(i));
}

mapCanvas.appendChild(cardArr[0]);
