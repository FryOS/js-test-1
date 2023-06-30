function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function dice(dice) {
  const min = 1;

  switch (dice) {
    case 4:
      return random(min, dice);

    case 6:
      return random(min, dice);

    case 8:
      return random(min, dice);

    case 10:
      return random(min, dice);

    case 12:
      return random(min, dice);
    case 20:
      return random(min, dice);

    default:
      console.log("Введите числа 4 или 6 или 8 или 10 или 12 или 20");
  }
}
 
console.log(dice(6));
