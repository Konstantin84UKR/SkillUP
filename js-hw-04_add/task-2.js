//Написати метод some який приймає масив і ф-ю callback.
// Цей метод поверне true якщо хоча б один елемент масиву пройже перевірку з callback callback приймає елемент масиву

let bar = function(x){
    return x<10;
}

let foo = function(x){
   return x>10;
}

function some(arr,callback) {
  
   for (const iterator of arr) {
       if (callback(iterator)) return true;
   }
   return false;
}

console.log("callback bar");
console.log(some([1,2,3,23,5], foo)); // true (перевіряємо чи елементи > 10)
console.log("callback foo");
console.log(some([12,45,67,34], bar)); // false (перевіряємо чи елементи < 10)