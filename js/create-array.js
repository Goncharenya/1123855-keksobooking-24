import {createObject} from '/js/create-object.js';

const createArray = () => {
  const array = [];
  for (let ind = 0; ind < 10; ind++) {
    array.push(createObject());
  }
  return array;
};

//console.log(createArray());

createArray();

export {createArray};
