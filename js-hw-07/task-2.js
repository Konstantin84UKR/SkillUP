// Задание 2
// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JS есть массив строк.
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

let ul = document.querySelector('#ingredients');
let ulTemp = document.createElement('ul');

ingredients.forEach(e => {
    let li = document.createElement("li");
    li.innerText = e;
    ulTemp.appendChild(li);
    //ul.appendChild(li);
})

ul.insertAdjacentElement("afterBegin", ulTemp)