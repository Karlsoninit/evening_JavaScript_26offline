// let number = 10;
// let str = "hello";
// let isActive = true;
// let SecondNumber = 10;

// console.log(typeof number);
// console.log(typeof str);
// console.log(typeof isActive);

// console.log(2 + number - SecondNumber);

// console.log("hello" + "my" + "friends");

// console.log(number !== SecondNumber);

// console.log(!true);

// console.log("word" === "word");

//------------ use or not use let

// let number = 10;
// let str = "hello";
// let isActive = true;
// let SecondNumber = 10;
// console.log("old number", number);
// console.log("start");

// number = 121;
// let someNum;
// someNum = 2;
// console.log(someNum);

// console.log("new number", number);

// console.log("finish");

//-------use const

// const x = "";
// x = "str";
// console.log(x);

// --------- prompt confirm alert

// console.log("start");
// let num = 12;

// let firstNumber = Number(prompt("enter some number"));
// let secondNumber = Number(prompt("enter some number"));

// console.log("finish");

// // console.log("your number " + waitText + " next number " + num);
// // console.log(`your number ${waitText} next number ${num}`);

// const result = `your number ${firstNumber} next number ${secondNumber} result ${firstNumber *
//   secondNumber}`;

// console.log(result);

// confirm("yes ?");

// const word =
// "Поскольку метод floor() является статическим методом объекта Math, вы всегда";

// console.log(word.toUpperCase());

// let upper = word.toUpperCase();

// console.log(upper);
// console.log(word);

// const num = "321";

// const res = num
//   .split("")
//   .reverse()
//   .join("");
// console.log(res);

//--------- palindrom ----

// const wordPalindrom = prompt("enter word");

// const transform = wordPalindrom
//   .split("")
//   .reverse()
//   .join("");

// console.log(wordPalindrom === transform);

// console.log("доход" === wordPalindrom);

// console.log('доход' === 'доход')

//---------- part two ------

// if(){

// }

// let numberPLus = 121;
// console.log("global", numberPLus);

// {
//   let number = 232 + numberPLus;
//   console.log("inner", number);
//   {
//     {
//       {
//         {
//           console.log("innnnnner ", number);
//         }
//       }
//     }
//   }
// }
// {
//   let number = 233;
//   console.log("inner double", number);
// }

// console.log(number);

// const getValue = Number(prompt("enter number"));

// console.log(getValue);

// if (getValue === 4) {
//   console.log("work");
// } else if (getValue === 9) {
//   console.log(`print ${getValue}`);
// } else {
//   console.error(`some not ${getValue}`);
// }

// console.log(getValue >= 0 && getValue <= 15);

// if (getValue === 10 || getValue === 30 || getValue === 20) {
//   console.log("work");
// }

// if(getValue === 10){

// } else if( getValue === 30){

// } else if(getValue === 20){

// }

// ------- time

// const getValue = Number(prompt("enter number"));

// if (getValue !== 0) {
//   if (getValue > 0 && getValue <= 15) {
//     console.log("1");
//     if (getValue > 10) {
//       console.log(` ${getValue} more then 10`);
//     } else if (getValue < 10) {
//       console.log(`${getValue} min 10`);
//     }
//   } else if (getValue > 15 && getValue <= 30) {
//     console.log("2");
//   } else if (getValue > 30 && getValue <= 45) {
//     console.log("3");
//   } else if (getValue > 45 && getValue <= 60) {
//     console.log("4");
//   } else {
//     console.error("больше чем 60");
//   }
// } else {
//   console.log("ok, sorry");
// }

// console.log(window);

//----------- parseInt parseFloat

// console.log(parseInt("12.23px"));
// console.log(parseFloat("12.23px"));

//--------- Math.ceil Math.floor

// console.log(Math.ceil(0.874747));
//-----
// console.log(Math.floor(1.9));

// console.log(Math.floor(Math.random() * 100));

//----------- switch ----

// let result = "not found";
// const getValue = Number(prompt("enter number"));

// if (getValue > 0 && getValue <= 5) {
//   switch (getValue) {
//     case 1:
//       result = 1;
//       break;
//     case 2:
//       result = 2;
//       break;
//     case 3:
//       result = 3;
//       break;
//     case 4:
//       result = 4;
//       break;
//     default:
//       result = 0;
//   }
// }

// console.log(result);

//--------- while ----

// console.log("save ?");

// let x = 10;

// while (x > 0) {
//   console.log(x);
//   x--;
// }

//---------- do while

// let getNum;
// let count = 0;
// let result;

// do {
//   getNum = Number(prompt("num"));
//   // console.log(count);
//   count += getNum;
// } while (getNum !== 0);

// console.log(count);

const arr = [2, 3, 5, 6, 8, 9];
// console.log(arr[1]);
let res;
for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] % 2 === 0) {
    res = arr[i];
  }
}

// console.log(11 % 2 === 0);
