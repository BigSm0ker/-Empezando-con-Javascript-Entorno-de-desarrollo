import saludar_por_hora from "./saludar_por_hora";
 const first = document.querySelector("#primer-numero");
 const second = document.querySelector("#segundo-numero");
 const form = document.querySelector("#sumar-form");
 const form_multiplicar = document.querySelector("#multiplicar-form");
 const firstMultiply = document.querySelector("#primer-numero-mul");
 const secondMultiply = document.querySelector("#segundo-numero-mul");
const form_saludar = document.querySelector("#saludar-form");
const horaInput = document.querySelector("#hora");
const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");
const generoSelect = document.querySelector("#genero");
 
 const div = document.querySelector("#resultado-div");
const saludoDiv = document.querySelector("#saludo-div");
 
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

form_saludar.addEventListener("submit", (event) => {
  event.preventDefault();

  const hora = Number.parseInt(horaInput.value);
  const edad = Number.parseInt(edadInput.value);
  const nombre = nombreInput.value;
  const genero = generoSelect.value;

  saludoDiv.innerHTML = "<p>" + saludar_por_hora(hora, nombre, edad, genero) + "</p>";
});