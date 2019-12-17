import options from './services.js'

// const cashier = {
//   name: "Janet",
//   count: 0,
//   products: []
// };

// const salle = function(product, count) {
//   console.log(count);
//   this.products.push(product);
// };

// const total = function() {
//   return this.products;
// };

//----------- call apply --------
// const salleFN = (prod, count) => {
//   salle.apply(cashier, [
//     {
//       prod,
//       count,
//       time: new Date()
//     },
//     4
//   ]);
// };

// salleFN("apple", 3);
// salleFN("graps", 3);

// console.log(cashier);

//----------- bind ----------

// const newCashier = total.bind(cashier);

// const result = newCashier();
// cashier.products.push('dhdhhd')

// console.log(cashier)

//------------- constructor --------

const Cashier = function(name = "default") {
  this.name = name;
  this.total = 0;
  this.products = [];

  this.show = function() {
    console.log(this.products);
  };
  this.fn = function(callback) {
    console.log("this ---> ", this);
    console.log(callback);
    callback();
  };
};

// const cashierAM = new Cashier();
// cashierAM.products.push("apple");
// cashierAM.show();
// cashierAM.fn(() => {
//   console.log("i am fn");
// });
// console.log("cashierAM ---> ", cashierAM);
// const cashierPM = new Cashier("Bony");
// cashierPM.fn(()=>{})
// console.log(cashierAM);
// console.log(cashierPM);

//--------- prototype ----

// const product = new Object();
// product.name = "apple";
// // console.log(product);

// const arr = new Array()
// arr.push('apple')
// console.log(arr)

// console.log(Array.isArray(product))
// const str = new String('string')
// console.log(str)
// console.log(window)

const he = new Object();
he.name = "Meeeeen";
console.log(he);

const she = Object.create(he);
console.log(she);
console.log(she.name);
she.name = "Eva";

const kinder = Object.create(she);
kinder.name = "Kinder";
console.log(kinder.name);

he.SHOWNAME();

myAlert('i am alert warn!!')


console.log(options.add(4,6))