// Створити простенький калькулятор за допомогою класу.

// Цей клас буде мати такі методи:

// Метод що запитує в користувача 2 числа
// Метод що додає ці числа
// Метод що віднімає ці числа
// Метод що перемножує ці числа
// Метод що ділить ці числа
// Метод що виводить результат арефметичної операції на екран в форматі `Результат операції ${value}`
// цей метод запускаєтьсяв кінці кожного з методів 2-5
// Метод що додає в калькулятор новий функціонал (Приймає аргументом колбек в якому описаний новий метод)
// Передати в метод №7 колбек ф-ю що підносить числа в степінь
// Написати всі методи і перевірити чи вони працюють

const power = function(){
    this.AX = this.AX ** this.BX;
}

class Calculator{
    
    constructor(){
        this.AX = 0; // названия как в регистры в intel 8086 проце так веселее))
        this.BX = 0;
    }    
    add(){
        this.AX +=this.BX; // результат в AX тоже по аналогии с intel 8086 
        this.LOG();
    }
    sub(){
        this.AX -= this.BX;
        this.LOG();
    }
    mul(){
        this.AX *= this.BX;
        this.LOG();
    }
    div(){
        this.AX /= this.BX;
        this.LOG();
    }
    LOG(){
        console.log(`Результат операції ${this.AX}`);
    };
    INVOKE(callback){
        callback.call(this);
        this.LOG();
    }
}

let intel8086 = new Calculator();
intel8086.AX = 2;
intel8086.BX = 3;
intel8086.add();
intel8086.sub();
intel8086.mul();
intel8086.div();
intel8086.INVOKE(power);

