// Задание 3
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. 
// При вызове будет получать один аргумент - начальный массив товаров,
// и записывать его в свойство items.
// Добавь методы класса:
// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

class Storage{
  constructor(arr){
    this.items = arr; 
  }
  getItems(){
    return this.items;
  }
  addItem(item){
    this.items.push(item);
  }
  removeItem(item){
    let indexItem = this.items.indexOf(item); // -1 если не найден 
    if(indexItem>=0){ // если оставить -1 удалить последний элемент массива.
      this.items.splice(indexItem, 1);  
    }
    
  }
}    


const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem('intel 8086');
console.table(storage.items);