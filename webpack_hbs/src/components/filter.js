import * as basicLightbox from "basiclightbox";
import about from "../handlebarse/about.hbs";
import users from "../users";
let instance = null;
const refs = {
  container: document.querySelector(".box"),
  btn: document.querySelector(".btn")
};

console.log("instance", instance);
// refs.container.innerHTML = about(users);

const onHandleClick = evt => {
  if (evt.target.textContent === "SHOW USERS") {
    setTimeout(() => {
      console.log("i am timeout");
      refs.container.innerHTML = about(users);
    }, 8000);
    refs.btn.textContent = "HIDE USERS";
  } else if (evt.target.textContent === "HIDE USERS") {
    setTimeout(() => {
      console.log("i am timeout");
      refs.container.innerHTML = "";
    }, 8000);
    refs.btn.textContent = "SHOW USERS";
  }
};

refs.btn.addEventListener("click", onHandleClick);
