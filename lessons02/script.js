"use strict";
// const arr = [41, 43, 4, 5, 32, 44, 5, 43, 44];
// let summ = 0;
// console.log(arr[arr.length - 1]);
// debugger;

// for (let i = 0; i < arr.length; i++) {
//   console.log("------", arr[i]);
//   if (arr[i] < 40) {
//     console.log(arr[i]);
//   } else {
//     console.log("more then 40", arr[i]);
//   }
//   summ = summ + arr[i]; //получить суму всех el
// }

// console.log("result", summ);

// let getNumbers;

// console.log(getNumbers)

// let x = 0;
// const arr = [];

// do {
//   getNumbers = prompt("enter numbers");

//   let num = Number(getNumbers);
//   //   if (num > 0) {
//   //     arr.push(num);
//   //   }
//   if (!isNaN(num)) {
//     arr.push(num);
//   }
// } while (getNumbers !== null);

// console.log(arr);
// console.log(x);

//------ method ------

// const arr = [41, 43, 4, 5, 32, 44, 5, 43, 44, 43, 43, 43, 43];

// console.log(arr);
//------- pop
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();

//------ shift unshift

// arr.unshift(9);
// arr.shift();
// arr.shift();
// arr.shift();
// arr.shift();

// const copyArr = arr.slice();

// copyArr.push("321");
// console.log(copyArr);

// const copyWithSplice = copyArr.splice(1,1, 'delete');
// console.log(copyWithSplice);

// console.log(copyArr)

// for (let i = 0; i < copyArr.length; i++) {
//   //   if (copyArr[i] === 5) {
//   //     console.log(i);
//   //     copyArr.splice(i, 1, arr[i] * 2);

//   //   }
//   if (copyArr.includes(5)) {
//     const indx = copyArr.indexOf(5);
//     copyArr.splice(indx, 1, 10);
//   }
// }

// console.log(copyArr.indexOf(100));

// console.log(copyArr.includes(5));
// console.log(copyArr.indexOf(5));

// const newArr = ["e", "r", "x"];

// console.log(newArr);
// console.log(copyArr);

// // const res = newArr.concat(copyArr);
// const res = [...newArr, ...copyArr];

// console.log(res);

//------- function ------

// function add(a, b) {
//   console.log(a * b);
// }

// add(21, 41);

// const add = function(a, b) {
//   // console.log(a * b);
//   return a * b
// };

// // console.log(add(3, 8))

// const result = add(3, 8);
// console.log(result)

//----------

// const arr = [2, 34, 5, 67, 8, 89, 9];
// const arrDouble = [2, 34, 5, 67, 8, 89, 9, 546, 767, 9080, 9, 75643, 4];

// const fn = function(arr) {
//   let total = 0;

//   for (let elem of arr) {
//     // console.log(elem);
//     total += elem;
//   }

//   for (let elem = 0; elem < arr.length; elem++) {
//     total += arr[elem];
//   }
//   // console.log(total);
//   return total;
// };

// const result = fn(arr);
// console.log(result);
// // console.log(fn(arr))

// const resultDouble = fn(arrDouble);
// console.log(resultDouble);

//-----------------

// const message = msg => message2 => message3 => message4=>  {

// };

// const message = function(msg) {
//   const message2 = function(msg) {
//     const message3 = function(msg) {
//       const message4 = function(msg) {
//         return msg;
//       };
//     };
//   };
// };

// const res = message("hello");
// console.log(res);

// const firstArr = [6, 7];

// const add = function() {
//   console.log(arguments);
//   const arr = Array.from(arguments);

//   if (!Array.isArray(arr[2])) {
//     return;
//   }

//   for (let elem of arr[2]) {
//     console.log(elem);
//   }
//   console.log(arr);
// };

// add(1, 2, firstArr, 2, 3, 4, 5);

// const add = (x, ...rest) => {
//   console.log(x);
//   console.log(rest);

//   const uniqueArr = [...x, ...rest]; //spread method
//   console.log(uniqueArr);
// };

// add(firstArr, 2, 3, 4, 5);

// console.log(Array.isArray([]));

//----------

// const show = () => {
//   return 'hello'
// };

// const result = show();
// console.log(result)
// console.log(result !== undefined);

const arrDouble = [2, 34, 5, 67, 8, 89, 9, 546, 767, 9080, 9, 75643, 4];

arrDouble.forEach(function(elem) {
  console.log(elem);
});
