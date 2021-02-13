// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
<<<<<<< HEAD
//  подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const placeholder = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

placeholder.addEventListener('input', () => {
  if (placeholder.value.length > 0) {
    span.textContent = placeholder.value;
  } else {
    span.textContent = 'незнакомец';
  }
})
=======
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

let input = document.querySelector("input#name-input"); 
let span = document.querySelector("span#name-output"); 

input.addEventListener('input',(event)=>{
    if(event.target.value === ""){
      span.innerHTML = 'незнакомец';
    }else{
      span.innerHTML = event.target.value; 
    }   
})

>>>>>>> 4f4269f6b7f628b943b41f55402229ab8d2bea22
