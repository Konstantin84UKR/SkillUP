//Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem) і велечину базового шрифта ("20px") і вертає конвертований розмір в пікселях
//"2rem" и "20px" 
let remTopixel = function(rem,pixelBase){
  let r = Number(rem.replace('rem',''));
  let p = Number(pixelBase.replace('px',''));
  return r*p; 
  };

console.log(remTopixel("2rem","20px" )); 