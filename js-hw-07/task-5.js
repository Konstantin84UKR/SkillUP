// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
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