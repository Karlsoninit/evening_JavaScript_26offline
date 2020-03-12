const refs = {
  container: document.querySelector(".container"),
  text: document.querySelector(".text")
};

// const handleClick = function(param, e) {
//   console.log("target", e.target);
//   console.log("this", this);
//   console.log("param", param);
// };

// refs.container.addEventListener(
//   "click",
//   handleClick.bind("some text", refs.text)
// );

//---------- callback ----

// const shooter = (resolve, reject) => {
//   console.log("shooot ....");
//   setTimeout(() => {
//     Math.floor(Math.random() > 0.5) ? resolve("win") : reject();
//   }, 2000);
// };

// const win = msg => {
//   console.log(msg);
// };

// const faile = () => {
//   console.log("faile");
// };

// shooter(win, faile);

// const shooter = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       Math.floor(Math.random() > 0.5)
//         ? resolve({ result: "win" })
//         : reject({ result: "faile" });
//     }, 2000);
//   });
// };

const message = msg => console.log(msg);

// shooter()
//   .then(message)
//   .catch(message)

//---------

// let count = 0;
// const timer = setInterval(() => {
//   count++;
//   console.log(count);
// }, 1000);

// const print = () => {
//   const value = prompt("enter ...");
//   return new Promise((resolve, reject) => {
//     if (value) {
//       resolve("ok");
//     } else {
//       reject("faile");
//     }
//   });
// };

// print()
//   .then(message)
//   .catch(message)
//   .finally(() => console.log("finally"));

//------------ promise all/race

// const awaitPromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       return resolve(text);
//     }, delay);
//   });
// };

// const promiseOne = awaitPromise("one", 2000);
// const promiseTwo = awaitPromise("two", 1000);

// Promise.race([promiseOne, promiseTwo]).then(console.log);

//-----------

// const fn = () => {
//   return Promise.reject(5);
// };

// fn()
//   .then(param => {
//     console.log(param);
//     const next = 5 + param;
//     return next;
//   })
//   .then(param => console.log(param))
//   .catch(er => console.log("er"))
//   .finally(() => console.log("end"));
