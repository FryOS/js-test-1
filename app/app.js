function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function play(dice) {
  const min = 1;

  const diceSidesAmount = Number(dice.substring(1));
  return random(min, diceSidesAmount);
}

console.log(play("d6"));
