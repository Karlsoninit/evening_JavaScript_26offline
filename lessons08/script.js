const products = [
  {
    image: {
      name:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.britcdn.com%2Fwp-content%2Fuploads%2F2013%2F07%2F1-Mug-645x429.jpg&f=1&nofb=1"
    }
  },
  {
    image: {
      name:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fideascdn.lego.com%2Fcommunity%2Flego_ci%2Fmigrated%2Fa1e%2F0ed%2F369529%2Fimage-thumbnail-full&f=1&nofb=1"
    }
  }
];

// const refs = {
//   container: document.querySelector(".container"),
//   btn: document.querySelector(".btn"),
//   form: document.querySelector("form"),
// };

// console.log(refs.container);

// for (let item of products) {
//   console.log(item);
//   refs.container.innerHTML += `<img width = 300px src='${item.name}'/>`;
// }

const drawImage = products
  // .map(item => `<img width = 300px src='${item.image.name}'/>`)
  .map(({ image: { name } }) => `<img width = 300px src='${name}'/>`)
  .join(" ");
// console.log(drawImage);
// // refs.container.innerHTML = drawImage;

// refs.container.insertAdjacentHTML("beforeend", drawImage);

// -----------

// const handleClick = event => {
//   if (event.target.className === "btn") {
//     refs.container.insertAdjacentHTML("beforeend", drawImage);
//   }
// };

// window.addEventListener("click", handleClick);

// const handleMouse = event => {
//   console.log(event);
//   if (event.target.className === "btn") {
//     alert("win");
//   }
// };

// window.addEventListener("mousemove", handleMouse);
// window.addEventListener("click", handleMouse);

//--------------- form ------

const refs = {
  form: document.querySelector("form"),
  arr: []
};

const handleSubmit = event => {
  event.preventDefault();
  //   console.log(event.target.elements);
  //   const [login, email, password, doublePassword] = event.target.elements;
  //   console.log(login.value);
  //   console.log(email.value);
  //   console.log(password.value);
  //   const user = {
  //     login: login.value,
  //     email: email.value,
  //     password: password.value,
  //     doublePassword: doublePassword.value
  //   };
  //   console.log(user);

  const formData = new FormData(event.target);
  const user = {};
  formData.forEach((value, name) => {
    user[name] = value;
    console.log("value :", value, "name :", name);
  });
  console.log(user);
  if (user.password === user.confirmPassword) {
    console.log("work ");
    refs.arr.push(user);
  } else {
    console.log("не совпадает");
  }
};

const handleClick = event => {
  if (event.target.className === "btn") {
    console.log(refs.arr);
  }
};

window.addEventListener("click", handleClick);

refs.form.addEventListener("submit", handleSubmit);
