//Написати ф-ю median яка приймає масив і знаходить його медіану Медіана – це числове значення, яке ділить відсортований масив чисел на більшу і меншу половини. У відсортованому масиві з непарним числом елементів медіана – це число в середині масиву. Для масиву з парним числом елементів, де нема ні одного елемента точно посередині, медіана – це середнє значення двох чисел, які знаходяться в середині масиву. В цій задачі заданий непустий масив натуральних чисел. Вам потрібно знайти медіану даного масиву.

let median = function (arr) {
  
  arr.sort(function(a, b) {
    return a - b;
  });

  let len = arr.length;

  if(len == 0){
    return "Пустой массив"; // Я не знаю что нужно возврашать в таких случаях вернул строку.
  }

  let i = Math.ceil(len/2);
  if(len==1){
   return arr[0];
  }else if(len%2 == 0){
    return (arr[i-1] + arr[i])/2;
  }else {
    return arr[i-1];
  }
}

console.log(median([1, 2, 3, 4, 5]));// 3
console.log(median([3, 6, 10, 15, 20, 99]));// 12.5
console.log(median([1]));// 1
console.log(median([]));// "Пустой массив"