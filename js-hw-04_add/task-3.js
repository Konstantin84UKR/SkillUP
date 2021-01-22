//Створити метод compact який приймає масив і
//вертає новий де відсутні будь-які значення що при переведені в bool дають false


function compact(arr){
   return  arr.filter(x => Boolean(x));
}

console.log(compact([1,0,'', null, 'Hello'])); // [1,'Hello']