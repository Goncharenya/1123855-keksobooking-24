import {getRandomInt} from '/js/random-num.js';

const getAvatar = () => {
  const randomNum = `0${getRandomInt(1, 10)}`.slice(-2);
  return `img/avatars/user${randomNum}.png`;
};

export {getAvatar};
