// Написати ф-ю capitalize яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися з великої літери.

function capitalize(srt) {
    let result = srt.split(" ").map(function (word) {
        return word[0].toUpperCase() + word.slice(1);
    })
    return result.join(" ");
}

console.log(capitalize('the quick brown fox')); // 'The Quick Brown Fox '