const getRandomFloat = function (from, to, numOfDecimalPlaces) {
  if (from < 0 || to <= from) {
    throw new Error('некорректный диапазон чисел');
  }
  const randomNum = from + Math.random() * (to - from);
  return randomNum.toFixed(numOfDecimalPlaces);
};

const getRandomInt = function (from, to) {
  return getRandomFloat(from, to, 0);
};

//getRandomInt(2, 90);

getRandomFloat(1, 100, 2);

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const HOURS = [
  '12:00',
  '13:00',
  '14:00',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const getAvatar = () => {
  const randomNum = `0${getRandomInt(1, 10)}`.slice(-2);
  return `img/avatars/user${randomNum}.png`;
};


const createObject = () => {
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

createObject();

const createArray = () => {
  const array = [];
  for (let ind = 0; ind < 10; ind++) {
    array.push(createObject());
  }
  return array;
};

createArray();
// console.log(createArray());
