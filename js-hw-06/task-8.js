import users from "./users.js";

//console.log(users);
// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = users => {
  return users.reduce((acc,user)=>{
     return acc += user.balance;     
  },0);
};
console.log(calculateTotalBalance(users)); // 20916