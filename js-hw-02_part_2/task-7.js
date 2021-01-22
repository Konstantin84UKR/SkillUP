//Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи

// let nonUniqueElements = function(arr){
   
//   let result = arr.filter(function (elem,index,array){
        
//     let count = 0;

//         for (const iterator of array) {
//           if(iterator === elem){
//             count++;
//           };
//         }  
//         return count>1;
//       });
//   return result;
//  };

let nonUniqueElements = function(arr){
   
  let result = [];
  let temp = [];
      for (let i = 0; i<arr.length;i++) {
          let arrItem = arr[i];
          if (temp.includes(arrItem) || arr.slice(i+1).includes(arrItem)) {
              result.push(arrItem);
          }
          temp.push(arrItem);
      }
  return result;
 };

console.log(nonUniqueElements([1, 2, 3, 1, 3])); // [1, 3, 1, 3]
console.log(nonUniqueElements([1, 2, 3, 4, 5])); // []
console.log(nonUniqueElements([5, 5, 5, 5, 5])); // [5, 5, 5, 5, 5]
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8])); // [10, 9, 10, 10, 9]
