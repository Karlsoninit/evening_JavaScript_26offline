// const user = new Object();

// console.log(user);

// const arr = new Array();

// console.log(arr);

// const user = {
//   name: "Ben",
//   hobbies: [{ morning: "run" }, { evening: "sleap" }],
//   car: false,
//   age: 19,
//   showName() {
//     console.log(user.name);
//   }
// };

// user.isActive = true;
// user.age = 20;

// delete user.car;
// user.showName();
// //----------
// console.log(user);

// const shop = {
//   products: {
//     apple: 32,
//     pineApple: 12,
//     juce: 22,
//     banannas: 3
//   },
//   counterProducts() {
//     console.log("counterProducts");
//   }
// };

// const products = {
//   apple: 32,
//   pineApple: 12,
//   juce: 22,
//   banannas: 3
// };

// const auto = {
//   audi: 2,
//   bmw: 1,
//   jeep: 12,
//   banannas: 7
// };

// // const twice = Object.assign({}, products, auto);
// const twice = { ...products, ...auto };
// console.log(twice);

// console.log("products", products);
// console.log("auto", auto);

// let total = 0;
// for (let product in products) {
//   console.log(products[product]);
//   total += products[product];
// }
// console.log("total", total);
// console.log(products);

// const key = Object.keys(shop.products);
// const value = Object.values(shop.products);
// console.log(key);
// console.log(value);
// console.log(products);

//----------

// const products = {
//   apple: 32,
//   pineApple: 12,
//   juce: 22,
//   banannas: 3
// };

// const { apple, juce, grap = 43 } = products;

// console.log(apple);
// console.log(juce);
// console.log(grap);

// console.log(products);

//-----------

const gameShop = [
  {
    name: "xBox",
    buyYear: 2019,
    warranty: true,
    id: 43434
  },
  {
    name: "xBox",
    buyYear: 2015,
    warranty: true,
    id: 57385834
  },
  {
    name: "xBox",
    buyYear: 2011,
    warranty: true,
    id: 8230492942
  },
  {
    name: "xBox",
    buyYear: 2017,
    warranty: true,
    id: 42442342
  },
  {
    name: "xBox",
    buyYear: 2017,
    warranty: true,
    id: 5024543454
  },
  {
    name: "xBox",
    buyYear: 2018,
    warranty: true,
    id: 193425678
  },
  {
    name: "xBox",
    buyYear: 2019,
    warranty: true,
    id: 1950394
  }
];

// console.log(gameShop);

const fullWarranty = 3;

const changeWarranty = arr => {
  let count = 0;
  const newArr = [];
  if (!Array.isArray(arr)) {
    return;
  }
  const yearNow = new Date().getFullYear();
  for (let elem of arr) {
    // yearNow - elem.buyYear < fullWarranty ? (elem.warranty = false) : null;
    if (yearNow - elem.buyYear > fullWarranty) {
      elem.warranty = false;
      newArr.push(elem);
    } else {
      count += 1;
    }
  }
  console.log(count);
  return newArr;
};

changeWarranty(gameShop);

// const result = changeWarranty(gameShop);
// console.log(result);
// console.log(new Date().getFullYear());
// console.log(Date.now());

//-----------

// const x = new Array()

// console.log(x)

const find = (arr, id) => {
  for (let elem of arr) {
    // console.log(elem);
    if (elem.id === id) {
      console.log(elem);
    }
  }
};

const getId = Number(prompt("id"));

find(gameShop, getId);
