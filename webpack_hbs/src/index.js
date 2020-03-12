import "./styles/style.css";
import "./components/filter";

// setTimeout(() => {
//   console.log("i am timeout");
// }, 8000);

const timer = () => {
  console.log(
    new Date().getHours(),
    new Date().getMinutes(),
    new Date().getSeconds()
  );
};

const secondTimer = setInterval(timer, 1000);
console.log("secondTimer", secondTimer);
setTimeout(() => {
  clearInterval(secondTimer);
}, 10000);

console.log(Date.now());
console.log("----", new Date().getSeconds());
console.log("----", new Date().getMinutes());
console.log("----", new Date().getHours());

const event = new Date("August 19, 1975 23:15:30");
event.setHours(20);

console.log("event", event);
