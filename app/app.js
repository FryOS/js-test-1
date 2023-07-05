function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function play(dice) {
  const min = 1;

  switch (dice) {
    
    case "d4":
      return random(min, Number(dice.substring(1)));

    case "d6":
      return random(min, Number(dice.substring(1)));

    case "d8":
      return random(min, Number(dice.substring(1)));

    case "d10":
      return random(min, Number(dice.substring(1)));

    case "d12":
      return random(min, Number(dice.substring(1)));
    case "d20":
      return random(min, Number(dice.substring(1)));

    default:
      console.log("Введите имя кубика в стиле d4 и только четные цифры кубика");
  }
}
 
console.log(play("d5"));

