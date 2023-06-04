const prices = [
  [100, 200],
  [120, 100],
  [200, 350],
];

const positiveChanges = prices
  .map(([x, y]) => y - x) // Получаем массив изменений цен
  .filter((change) => change > 0); // Оставляем только положительные изменения

console.log(positiveChanges); // [100, 150]

const arr = [2, 4, 4, 10];
const f = arr.reduce((acc, el, i) => {
  if (i != arr.length - 1) {
    return acc + el;
  } else {
    return (acc + el) / arr.length;
  }
}, 0);
console.log(f);

const arr1 = [2, 4, 4, 10, 20];

function some(arr, num) {
  const res = arr.find((el) => el === num);
  return res ? true : false;
}

console.log(some(arr1, 9));
