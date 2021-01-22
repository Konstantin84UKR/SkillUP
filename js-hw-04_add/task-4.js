// Написати ф-ю showDeliveryStatus яка приймає масив і виводить на екран інформацію про доставку товара всіх типів.

// Якщо прогрес доставки 100 показувати строку "Done"

// Якщо прогрес доставки < 100 показувати строку "In progress"

// Якщо прогрес доставки null показувати строку "Ready for delivery"

const ordersA = [
{ name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
{ name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
{ name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
]

const ordersB = [
{ name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
{ name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
]



function deliveryProgress(order){
  
   let answer;

console.log()

   if(order.deliveryProgress === 100){
      answer = 'Done';        
   }else if(order.deliveryProgress < 100 && Number.isFinite(order.deliveryProgress) ){
      answer = 'In progress'
   }else if(order.deliveryProgress === null){
      answer = 'Ready for delivery'
   }   
   return answer;
}


function showDeliveryStatus(arr){
   
   let result = [];
    
   for (let i = 0; i < arr.length; i++) {
      result[arr[i].type] = deliveryProgress.call(null,arr[i]);
   }

   //  for (let i = 0; i < result.length; i++) {
   //  if(typeof result[i] === "undefined") {
   //    result[i] = 'Not Ordered';
   //  }
    
    for (let i = 0; i < result.length; i++) {
      if(typeof result[i] !== "string") {
        result[i] = 'Not Ordered';
      }

   
} 
   return result;
}


console.log(showDeliveryStatus(ordersA)); // "In Progress", "Done", "Ready for delivery"
console.log(showDeliveryStatus(ordersB)); // "In progress", "Not Ordered", "Ready for delivery"