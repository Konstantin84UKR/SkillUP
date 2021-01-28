import users from "./users.js";

//console.log(users);
// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
const getUsersWithEyeColor = (users, color) => {

  let result = users.filter((user) => {
    return user.eyeColor === color;
  })

  return result;

};
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]