import "./styles.css";
import axios from "axios";
import { transformResult } from "./components/services";
// axios
//   .post("https://rn-todo-48cbb.firebaseio.com/wishes.json", {
//     title: "cofe brake !!"
//   })
//   .then(data => console.log(data));

const getWishes = () => {
  axios.get("https://rn-todo-48cbb.firebaseio.com/wishes.json").then(data => {
    renderToHTML(transformResult(data.data));
  });
};
getWishes();

const renderToHTML = wishes => {
  console.log("wishes", wishes);
  document.querySelector(".wishesCloud").innerHTML = "";
  document
    .querySelector(".wishesCloud")
    .insertAdjacentHTML(
      "beforeend",
      wishes
        .map(
          wish =>
            `<li id=${wish.id}><h2>${wish.title}</h2><button class='btn'>DELETE</button></li>`
        )
        .join(" ")
    );
};

const deleteWIsh = id => {
  axios
    .delete(`https://rn-todo-48cbb.firebaseio.com/wishes/${id}.json`)
    .then(data => {
      console.log(data);
      getWishes();
    });
};

// axios
//   .post("https://rn-todo-48cbb.firebaseio.com/wishes.json", {
//     title: "React"
//   })
//   .then(data => {
//     console.log(data);
//   });

// setTimeout(() => {
//   console.log(document.querySelector(".btn"));
// }, 1000);

document.querySelector(".wishesCloud").addEventListener("click", e => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  const id = e.target.closest("li").id;
  deleteWIsh(id);
});

// document
// .querySelectorAll(".btn")
// .addEventListener("click", ({ target }) =>
//   console.log(target.closest("li").id)
// );
