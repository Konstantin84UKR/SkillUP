import users from "./users.js";

//console.log(users);
// Задание 3
// Получить массив имен пользователей по полу (поле gender).
const getUsersWithGender = (users, gender) => {

  let arrObj = users.filter(user => {
    return user.gender === gender;
  });

  let userNameArr = arrObj.map(user => {
    return user.name;
  });

  return userNameArr;

  // // Так тоже работает 
  // return users.filter(user => {
  //   return user.gender === gender;
  // }).map(user => {
  //   return user.name;
  // });

};
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]