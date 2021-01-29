import users from "./users.js";

//console.log(users);
// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).
const getUserWithEmail = (users, email) => {
     return users.find(user=>{
        if(user.email === email){
         return user;
       };
     })
};
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}