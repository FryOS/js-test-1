function multiplyBy() {
  const num1 = document.getElementById("firstNumber").value;
  const num2 = document.getElementById("secondNumber").value;

  const resMult = Number(+num1 * +num2);
  document.querySelector("#result").setAttribute("value", resMult.toString());
}

function divideBy() {
  const num1 = document.getElementById("firstNumber").value;
  const num2 = document.getElementById("secondNumber").value;
  if (Number(num2) === 0) {
    alert("на 0 делить нельзя. ");
    return;
  }
  const resDiv = Number(+num1 / +num2);

  document.querySelector("#result").setAttribute("value", resDiv.toString());
}

function minus() {
  const num1 = document.getElementById("firstNumber").value;
  const num2 = document.getElementById("secondNumber").value;
  const resMinus = Number(+num1 - +num2);
  document.querySelector("#result").setAttribute("value", resMinus.toString());
}

function plus() {
  const num1 = document.getElementById("firstNumber").value;
  const num2 = document.getElementById("secondNumber").value;
  const resPlus = Number(+num1 + +num2);
  document.querySelector("#result").setAttribute("value", resPlus.toString());
}
