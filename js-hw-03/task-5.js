// Задание 5
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
  //{ name: 'Слон', price: 100, category: 50 },
];
const getAllPropValues = function(arr, prop) {
 
  // Вариант №1 Потренировался с map и filter, но этот вариант плох тем что мы создаем лишние массив один раз при map другой при filter 
  // просто перебрать циклом мне показалось понятнее и не нужно лишние массивы.
  // let result = arr.map(function(obj) {
  //    if(obj.hasOwnProperty(prop)){
  //          return obj[prop];
  //      }
  // });
  
  // return result.filter(e => e !== undefined);
   
  // Вариант №2
  let result = [];
  
  for (const obj of arr) {
     if (Object.hasOwnProperty.call(obj, prop)) {
          result.push(obj[prop])
      }
  }

  return result;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category')); // []