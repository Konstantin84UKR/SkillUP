// Задание 6
<<<<<<< HEAD
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
=======
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

>>>>>>> 4f4269f6b7f628b943b41f55402229ab8d2bea22
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

<<<<<<< HEAD
const input = document.querySelector('#validation-input');
const dataLength = Number.parseInt(input.dataset.length);

input.addEventListener('blur', () => {
  if (input.value.length === dataLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
})

=======
// #validation-input {
//   border: 3px solid #bdbdbd;
// }
// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;
// }

const refs = {
    input : document.querySelector("#validation-input"),
}

console.log(refs);

refs.input.addEventListener('input',(e)=>{
    let  classList = refs.input.classList;
    while (classList.length > 0) {classList.remove(classList.item(0));}

    if(refs.input.value.length > 6){
       refs.input.classList.add('valid');
    }else{
       refs.input.classList.add('invalid');  
    }
})



>>>>>>> 4f4269f6b7f628b943b41f55402229ab8d2bea22
