// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
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

