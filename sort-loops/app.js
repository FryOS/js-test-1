console.log("loop started");

const arr = [1, 40, -5, 10, 0];

function sortarr(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Использовать  ' > ' или ' < ' для разного порядка   
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

sortarr(arr);
console.log(arr); //[ -5, 0, 1, 10, 40 ]
