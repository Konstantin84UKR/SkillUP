//Написати ф-ю rgbToHex яка приймає колір в форматі rgb і повертає колір в форматі hex

let rgbToHex = function(r,g,b){
  //let hex = '#' + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0"); 
  let rHex = r.toString(16).padStart(2, "0");
  let gHex = g.toString(16).padStart(2, "0");
  let bHex = b.toString(16).padStart(2, "0");
  let hex = '#' + rHex + gHex + bHex;     
  return hex;
 };

console.log(rgbToHex(255,125,0)); 