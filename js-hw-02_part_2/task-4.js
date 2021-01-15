//Написати ф-ю що приймає число (температура в цельсіях) і виводить результат в фаренгейтах
//(36.6 °C × 9/5) + 32 = 97,88 °F 

let celsiusToFahrenheit = function(c){
  let f = (c * 9/5) + 32;
  return Number(f.toFixed(2));
 };

console.log(celsiusToFahrenheit(36.6)); 