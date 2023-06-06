function isValidCardNumber(cardNumber) {
  // удаляем дефисы из номера карты
  const carNumberWithoutDashes = cardNumber.replaceAll("-", "");

  // проверяем, что номер карты состоит только из цифр
  if (isNaN(carNumberWithoutDashes)) {
    return false;
  }

  // алгоритм Луна
  let sum = 0;
  for (let i = carNumberWithoutDashes.length - 1; i >= 0; i--) {
    const digit = Number(carNumberWithoutDashes[i]);
    if (i % 2 === 0) {
      const doubleDigit = digit * 2;
      sum += doubleDigit > 9 ? doubleDigit - 9 : doubleDigit;
    } else {
      sum += digit;
    }
  }
  return sum % 10 === 0;
}

const card = "4561-2612-1234-5464";
console.log(isValidCardNumber(card));
