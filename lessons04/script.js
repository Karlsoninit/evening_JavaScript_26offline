// const fn = num => {
//   console.log("inner fn", num);
//   const one = () => {
//     console.log("inner one", num);
//     const two = () => {
//       console.log("inner two", num);
//     };
//     two();
//   };
//   one();
// };

// const result = fn(5);
// console.log(result);

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true }
// ];

// const toggle = Number(prompt("change"));

// const shop = (arr, changeIsFresh, changeCount) => {
//   for (let elem of arr) {
//     if (toggle === 1 && changeIsFresh(elem)) {
//       console.log(elem);
//     } else if (toggle === 2 && changeCount(elem)) {
//       console.log(elem);
//     }
//   }
// };

// // const filterIsFresh = el => {
// //   //   console.log("inner filter", el);
// //   return el.isFresh;
// // };

// shop(
//   fruits,
//   el => el.isFresh,
//   el => el.quantity >= 150
// );

//-----------

const counter = () => {
  let count = 0;
  let n = 3;
  const increment = num => {
    count = count + 1;
    console.log(count);
    if (count % 3 === 0) {
      console.log("-10");
    }
  };
  return increment;
};

// const step = counter();

// step();
// step();
// step();
// step();

//--------------- next user
// console.log("--------------- next user");
// const newUser = counter();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// newUser();
// let count = 0;

// const fn = () => {
//   console.log(count);
//   count++;

// };

// fn();

// count = 4;

// fn();
// fn();

//-----------

const fnA = function() {
  console.log("Начала выполняться [fnA] //2");
  fnB();
  console.log("Продолжила выполняться [fnA] после выхода из [fnB] //4");
};

const fnB = function() {
  console.log("Выполняется [fnB] //3");
};

console.log("Начал выполнение [main] // 1");
fnA();
console.log("Продолжил выполняться [main] после выхода из [fnA] //5");

//------------ bank

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,
  id: 0,

  // История транзакций
  transactions: [],
  Transaction: {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw"
  },

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const tranzactioon = {
      amount,
      type,
      id: this.id++
    };
    return tranzactioon;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.transactions.push(
      this.createTransaction(amount, this.Transaction.WITHDRAW)
    );
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
  withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {}
};

console.log(account.createTransaction(10, account.Transaction.DEPOSIT));
account.deposit(10);
account.deposit(15);
account.deposit(20);

console.log(account.transactions);
