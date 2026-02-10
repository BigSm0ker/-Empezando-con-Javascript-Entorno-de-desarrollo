import sumar from "./sumador";    

import multiplicar from "./multiplicador";
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const form_multiplicar = document.querySelector("#multiplicar-form");
const firstMultiply = document.querySelector("#primer-numero-mul");
const secondMultiply = document.querySelector("#segundo-numero-mul");

const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  
});
form_multiplicar.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstMultiply.value);
  const secondNumber = Number.parseInt(secondMultiply.value);

  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});