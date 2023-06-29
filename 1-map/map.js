
const arr = [
  { id: 5, name: "Вася" },
  { id: 1, name: "Петя" },
  { id: 2, name: "Игорь" },
  { id: 1, name: "Игорь" },
  { id: 3, name: "Игорь" },
];


const uniqueArrId = Array.from(new Set(arr.map((obj) => obj.id))).map((id) => {
  // Используем метод find для получения первого объекта с заданным "id" 
  //из исходного массива
  return arr.find((obj) => obj.id === id);
});

const uniqueArrName = Array.from(new Set(arr.map((obj) => obj.name))).map((name) => {
  // Используем метод find для получения первого объекта с заданным "name" 
  //из исходного массива
  return arr.find((obj) => obj.name === name);
});

console.log(uniqueArrId);
console.log(uniqueArrName);
