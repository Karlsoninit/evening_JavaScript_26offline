import about from "../handlebarse/about.hbs";
import users from "../users";
const refs = {
  container: document.querySelector(".box"),
  btn: document.querySelector(".btn")
};

console.log(about(users));

// refs.container.innerHTML = about(users);

const onHandleClick = evt => {
  if (evt.target.textContent === "SHOW USERS") {
    refs.container.innerHTML = about(users);
    refs.btn.textContent = "HIDE USERS";
  } else if (evt.target.textContent === "HIDE USERS") {
    refs.container.innerHTML = "";
    refs.btn.textContent = "SHOW USERS";
  }
};

refs.btn.addEventListener("click", onHandleClick);
