import users from "./users.js";

//console.log(users);
// Задание 4
// Получить массив только неактивных пользователей (поле isActive).
const getInactiveUsers = users => {
  return users.filter(user=>{
   return !user.isActive;
  });
 };
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]