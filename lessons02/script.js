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

const arr = [41, 43, 4, 5, 32, 44, 5, 43, 44, 43, 43, 43, 43];

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

const copyArr = arr.slice();

// copyArr.push("321");
// console.log(copyArr);

// const copyWithSplice = copyArr.splice(1,1, 'delete');
// console.log(copyWithSplice);

// console.log(copyArr)

for (let i = 0; i < copyArr.length; i++) {
  //   if (copyArr[i] === 5) {
  //     console.log(i);
  //     copyArr.splice(i, 1, arr[i] * 2);

  //   }
  if (copyArr.includes(5)) {
    const indx = copyArr.indexOf(5);
    copyArr.splice(indx, 1, 10);
  }
}

// console.log(copyArr.indexOf(100));

// console.log(copyArr.includes(5));
// console.log(copyArr.indexOf(5));

const newArr = ["e", "r", "x"];

console.log(newArr);
console.log(copyArr);

// const res = newArr.concat(copyArr);
const res = [...newArr, ...copyArr];

console.log(res);
