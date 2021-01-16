// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач).
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

const findBestEmployee = function(employees) {
  // //Вариант #1 
  // let human = Object.keys(employees);
  // let task = Object.values(employees);
  // let maxTask =  Math.max.apply(null, task);
  // let indexMaxTask = task.findIndex((e)=> e==maxTask);

  // return human[indexMaxTask];
  
  // // Вариант #1 (в стиле CodeWars)
  // return Object.keys(employees)[Object.values(employees).findIndex((e)=> e==Math.max.apply(null, Object.values(employees)))];
   
  // Вариант #2 
  let maxTask = 0;
  let employe;
  for (const key in employees) {
    if (Object.hasOwnProperty.call( employees , key)) {   // Object.hasOwnProperty.call это редактор полсказал. Я так и не понял необходимость этой проверки. 
      const element = employees[key];
      if(element > maxTask){
        maxTask = element;
        employe = key;
      }   
    }
  }
  return employe;

};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux