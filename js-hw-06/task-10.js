import users from "./users.js";

//console.log(users);
// Задание 10
// Получить массив всех умений всех пользователей (поле skills),
//  при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
const getSortedUniqueSkills = users => {
    
   // Вариант №1
   const arrSkills = [];
   users.forEach(user => {
      user.skills.forEach(skill => {
         if( !arrSkills.includes(skill)){
            arrSkills.push(skill);
         } 
      });     
   }); 

   const result = arrSkills.sort(); //  Как лучше сохранять в переменую  result = arrSkills.sort()  ИЛИ сразу return arrSkills.sort() ???
   return result;

   // Вариант №2 через Set
   //
   // let list = new Set();
   // users.forEach(user =>{
   //    user.skills.forEach(skiil=>{
   //       list.add(skiil);
   //    });
   //  });
   //  let result = Array.from(list).sort();
   //  return result;
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
