function getRandomInt(from, to) {
  if (from < 0 || to <= from) {
    throw new Error('некорректный диапазон чисел');
  }
  return Math.round(from + Math.random() * (to - from));
}

getRandomInt(2, 90);

const getRandomFloat = function (from, to, numOfDecimalPlaces) {
  if (from < 0 || to <= from) {
    throw new Error('некорректный диапазон чисел');
  }
  const randomNum = from + Math.random() * (to - from);
  return randomNum.toFixed(numOfDecimalPlaces);
};

getRandomFloat(1, 100, 2);
