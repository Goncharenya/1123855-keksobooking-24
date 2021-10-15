import {FEATURES, HOURS, PHOTOS, TYPES} from '/js/names.js';
import {getRandomInt, getRandomFloat} from '/js/utils.js';

export const getAvatar = () => {
  const randomNum = `0${getRandomInt(1, 10)}`.slice(-2);
  return `img/avatars/user${randomNum}.png`;
};

export const createObject = () => {
  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };

  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: 'Чудесное место!',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInt(2000, 50000),
      type: TYPES[getRandomInt(0, 4)],
      rooms: getRandomInt(1, 100),
      guests: getRandomInt(1, 100),
      checkin: HOURS[getRandomInt(0, 2)],
      checkout: HOURS[getRandomInt(0, 2)],
      feature: FEATURES.slice(0, getRandomInt(1, 5)),
      description: 'ВАУ! Это все',
      photos: PHOTOS.slice(0, getRandomInt(1, 2)),
      location,
    },
  };
};
