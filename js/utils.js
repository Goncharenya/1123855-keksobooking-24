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

export {getRandomFloat, getRandomInt};
