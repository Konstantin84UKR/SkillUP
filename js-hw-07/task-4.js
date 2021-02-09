// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let decrement = document.querySelector("[data-action = 'decrement']"); //[атрибут="значение"]
console.log(decrement);
let increment = document.querySelector("[data-action = 'increment']"); //[атрибут="значение"]
let span = document.getElementById('value');

decrement.addEventListener('click',(event)=>{
  let count = parseInt(span.innerText);
  count += 1;
  span.innerText = count;
});

increment.addEventListener('click',(event)=>{
  let count = parseInt(span.innerText);
  count -= 1;
  span.innerText = count;
});