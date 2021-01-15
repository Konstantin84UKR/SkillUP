//Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість голосних літер. aeiouAEIOU - рядок з голосними в англ алфавіті

function countVowels(str) {
  let arr = str.split("");
  let result = 0
  for (const iterator of arr) {
    if("aeiouAEIOU".includes(iterator)){
        result += 1;
    }
  }
    return result;
}

console.log(countVowels('the quick brown fox')) // 5