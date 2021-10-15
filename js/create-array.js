import {createObject} from '/js/data.js';

export const createArray = () => {
  const array = [];
  for (let ind = 0; ind < 10; ind++) {
    array.push(createObject());
  }
  return array;
};
