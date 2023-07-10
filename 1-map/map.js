const arr = [
  { id: 5, name: "Вася" },
  { id: 1, name: "Петя" },
  { id: 2, name: "Игорь" },
  { id: 2, name: "Игорь" },
  { id: 1, name: "Игорь" },
  { id: 3, name: "Игорь" },
];

const arr1 = [
  { id: 5, name: "Вася" },
  { id: 1, name: "Петя" },
  { id: 2, name: "Игорь" },
  { id: 2, name: "Игорь" },
  { id: 1, name: "Игорь" },
  { id: 3, name: "Игорь" },
];

function uniqueArr(arr, key) {
  const newSet = new Set(arr.map((obj) => obj[key]));
  const uniqueArr = Array.from(newSet).map((value) => {
    return arr.find((obj) => obj[key] === value);
  });
  return uniqueArr;  
}

console.log(uniqueArr(arr, "id"));
console.log(uniqueArr(arr1, "name"));
