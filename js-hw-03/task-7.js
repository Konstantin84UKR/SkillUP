// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
// white_check_mark
// eyes
// raised_hands



/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
  ID: 0 
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: ++Transaction.ID,
      amount: amount,
      type: type,
      successful: false
    }    
  },
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    let transaction = this.createTransaction(amount,Transaction.DEPOSIT);
    let answer = this.conductingTransaction(transaction);
    console.log(answer.comment);
    this.transactions.push(transaction);
  },
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    let transaction = this.createTransaction(amount,Transaction.WITHDRAW);
    let answer = this.conductingTransaction(transaction);
    console.log(answer.comment);
    this.transactions.push(transaction);
  },
  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    let tran = this.transactions.filter((tran)=> tran.id == id);
    if(tran.length === 0){
      return false;
    }else if(tran.length >= 1){
      console.log(`по транзации c ${id} найденно ${tran.length} что то пошло не так в нашем банке`);
      return tran;
    }else if(tran.length === 1){
      return tran[0];
    }else{
      console.log(`по транзации c ${id} непредвиденная ситуация`);
      return true; //верну тру что бы не создавать новую транзакцию 
    }
  },
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    
    let listTransactionsOfType = this.transactions.filter((t)=> {
      return (t.type === type && t.successful);
    });
    
    return listTransactionsOfType;
  },
   
  /*
   * Метод реализует проведение транзакции и меняет свойство 
   * successful в случаи успеха на true
   * в историю транзакций будут записаны все транзакции как успешные так и нет
   * по балансу пройдут тольок успешные транзакции
   */
  conductingTransaction(transaction){
    //проверяем есть ли транзакция с таким id для избежания дублирования операций
    if(this.getTransactionDetails(transaction.id)){
      return false;
    }
    
    // пополняем в любом случаи
    if(transaction.type === Transaction.DEPOSIT){
      this.balance += transaction.amount;
      transaction.successful = true;
      return {
        result: true,
        comment: `пополнение суммы в размере ${transaction.amount} прошло успешно`,
      };
    }else if(transaction.type === Transaction.WITHDRAW){
      // еще раз проверяем хватает средств или нет непосредственно перед списанием.
      // 
      if(this.getBalance() < transaction.amount){
        transaction.successful = false;
        return {
          result: false,
          comment: `снятие суммы в размере ${transaction.amount} не возможно, недостаточно средств`,
        };
      }else{
        this.balance -= transaction.amount;
        transaction.successful = true;
        return {
          result: true,
          comment: `снятие суммы в размере ${transaction.amount} прошло успешно`,
        };
      }

    }   
  },
};


class userAccount{
  constructor(name){
    this.name = name;
    this.account = Object.assign({}, account);
    this.account.transactions = []; // не знаю как сделать иначе не меняя структуру объекта account.
  }
}


let user1 = new userAccount;
console.log("user1");
console.log(user1.account.getBalance());
user1.account.deposit(100);
user1.account.deposit(50);
user1.account.withdraw(300);
user1.account.withdraw(25);
console.log('//======DEPOSIT======= Только успешные//');
console.log(user1.account.getTransactionTotal(Transaction.DEPOSIT));
console.log('//======WITHDRAW======= Только успешные//');
console.log(user1.account.getTransactionTotal(Transaction.WITHDRAW)); 
console.log('//======BALANCE=======//');
console.log(user1.account.getBalance());

let user2 = new userAccount;
console.log("user2");
console.log(user2.account.getBalance());
user2.account.withdraw(100);
user2.account.deposit(50);
user2.account.withdraw(300);
user2.account.withdraw(25);
console.log('//======DEPOSIT======= Только успешные//');
console.log(user2.account.getTransactionTotal(Transaction.DEPOSIT));
console.log('//======WITHDRAW======= Только успешные//');
console.log(user2.account.getTransactionTotal(Transaction.WITHDRAW)); 
console.log('//======BALANCE=======//');
console.log(user2.account.getBalance());

