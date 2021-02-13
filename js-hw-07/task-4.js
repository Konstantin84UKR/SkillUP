// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const span = document.getElementById("value");

let increment = function () {
  let num = Number.parseInt(span.innerText);
  num += 1;
  span.innerText = num;
}

let decrement = function () {
  let num = Number.parseInt(span.innerText);
  num -= 1;
  span.innerText = num;
}

const decrementBTN = document.querySelector('[data-action="decrement"]');
decrementBTN.addEventListener('click', decrement);
const incrementBTN = document.querySelector('[data-action="increment"]');
incrementBTN.addEventListener('click', increment);

