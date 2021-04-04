// Задание 1. Переключатель цветов
// Есть массив цветов в hex-формате и кнопки Start и Stop.
// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>
// const colors = [
//   'red',
//   'green',
//   'violet',
//   'gray',
//   'blue',
//   'yellow',
// ];
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
//  Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

let refs = {
  colors: ["red", "green", "violet", "gray", "blue", "yellow"],
  start: document.querySelector("[data-action=start]"),
  stop: document.querySelector("[data-action=stop]"),
  body: document.body
};
refs.stop.disabled = true;
let updateColorStart;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let max = refs.colors.length - 1;
let min = 0;
const updateColor = () => {
  let index = randomIntegerFromInterval(min, max);
  if (document.body.style.background === refs.colors[index]) {
    index = index == 0 ? max : index - 1;
  }
  document.body.style.background = refs.colors[index];
};

refs.start.addEventListener("click", () => {
  refs.start.disabled = true;
  refs.stop.disabled = false;
  updateColorStart = setInterval(updateColor, 1000);
});

refs.stop.addEventListener("click", () => {
  refs.start.disabled = false;
  refs.stop.disabled = true;
  clearInterval(updateColorStart);
});
