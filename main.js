let calcDisplay = document.querySelector(".calculator_display__input");
let btnNumber = document.querySelectorAll(".calculator_btn");
document.querySelector(".calculator_btn__reset").onclick = resetAll;

let firstNumber = "";
let lastNumber = "";
let sign = "";
let finish = false;

let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let operations = ["+", "-", "x", "/"];

for (let i = 0; i < btnNumber.length; i++) {
  btnNumber[i].addEventListener("click", clickBtn);
}

function clickBtn(event) {
  let key = event.target.textContent;
  //Проверяем нажатую цифру от 0 - 10 и .
  if (number.includes(key)) {
    if (lastNumber === "" && sign === "") {
      firstNumber += key;
      calcDisplay.value = firstNumber;
    } else if (firstNumber !== "" && lastNumber !== "" && finish) {
    } else {
      lastNumber += key;
      calcDisplay.value = lastNumber;
    }
    console.log(firstNumber, lastNumber, sign);
    return;
  }
  if (operations.includes(key)) {
    sign += key;
    console.log(firstNumber, lastNumber, sign);
    calcDisplay.value = sign;
    return;
  }
  if (sign === "=") {
    switch (sign) {
      case "+":
        firstNumber = +firstNumber + +lastNumber;
        break;
      case "-":
        firstNumber = firstNumber - lastNumber;
        break;
      case "x":
        firstNumber = firstNumber + lastNumber;
        break;
      case "/":
        firstNumber = firstNumber / lastNumber;
        break;
    }
    finish = true;
    calcDisplay.value = firstNumber;
    console.log(firstNumber, lastNumber, sign);
  }
}

function resetAll() {
  firstNumber = "";
  lastNumber = "";
  sign = "";
  finish = false;
  calcDisplay.value = 0;
}
