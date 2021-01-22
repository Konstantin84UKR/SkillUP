// Написати метод every який приймає масив і ф-ю callback 
// (в якій ми будемо робити різні перевірки) Цей метод повертає true 
// якщо кожен елемент масиву пройшов перевірку з callback. 
// Якщо хоча б один елемент не проходить перевірку то повертає false, callback приймає елемент масиву

let bar = function(x){
     return x<10;
}

let foo = function(x){
    return x>10;
}

function every(arr,callback) {
   
    for (const iterator of arr) {
        if (!callback(iterator)) return false;
    }
    return true;
}
console.log("callback bar");
console.log(every([1,2,3,4,5], bar)); // true (перевіряємо чи елементи < 10)
console.log("callback foo");
console.log(every([2,45,67,34], foo)); // false (перевіряємо чи елементи > 10)