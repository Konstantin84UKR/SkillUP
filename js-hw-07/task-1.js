// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

console.log("task 1");

let categories = document.querySelector('#categories');
//console.log(categories);
let li = categories.querySelectorAll('li.item');

console.log(li);
console.log(`Всего категорий ${li.length}`);

let h2 = document.querySelectorAll('h2');

li.forEach((e) => {
  let h2 = e.querySelector('h2');
  console.log(`Категория: ${h2.innerHTML}`);
  let ulArr = e.querySelector('ul');
  let list = ulArr.querySelectorAll('li');
  console.log(`Количество элементов:: ${list.length}`);
  //list.forEach((e) => { console.log(e.innerHTML) });
})
