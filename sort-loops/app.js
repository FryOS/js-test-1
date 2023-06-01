console.log("loop started");

const arr = [1, 40, -5, 10, 0];

function sortarr(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // если нужно по убыванию ' > ' поменять на ' < '
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
sortarr(arr);
console.log(arr); //[ 40, 10, 1, 0, -5 ]
