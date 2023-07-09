const prices = [[100,200], [120,100],[200,350]];

const positiveChanges = prices
  .map(([x, y]) => y - x) // Получаем массив изменений цен
  .filter(change => change > 0); // Оставляем только положительные изменения

console.log(positiveChanges); // [100, 150]