// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const input = document.querySelectorAll('input')[0];
const btn = document.querySelectorAll('button');
const boxes = document.querySelector('#boxes');
const render = btn[0];
const destroy = btn[1];

function createBoxes(amount) {
  let divWidth_Height = 20;
  for (let index = 0; index < amount; index++) {
    divWidth_Height += 10;
    let newDiv = document.createElement("div");
    const RED = 255.99 * Math.random();
    const GREEN = 255.99 * Math.random();
    const BLUE = 255.99 * Math.random();
    newDiv.setAttribute('style', `width: ${divWidth_Height}px; height: ${divWidth_Height}px; background: RGB(${RED}, ${GREEN}, ${BLUE});`);
    boxes.append(newDiv);
  }
}
function destroyBoxes() {
  boxes.innerHTML = '';
}

render.addEventListener('click', () => {
  boxes.innerHTML = '';
  createBoxes(Number.parseInt(input.value))
});
destroy.addEventListener('click', destroyBoxes)

