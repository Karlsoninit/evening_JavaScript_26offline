// const users = [
//   {
//     name: "Josh",
//     weight: 175,
//     age: 30,
//     eyecolor: "brown",
//     isHappy: true,
//     cars: ["Chevy", "Honda"],
//     favoriteBook: {
//       title: "When the Fire Nation Attacked",
//       author: "Nickelodeon",
//       released: "02-21-2005"
//     }
//   }
// ];
// const tranformFromJSON = JSON.stringify(users);
// localStorage.setItem("user", tranformFromJSON);

// console.log(user);

// console.log(tranformFromJSON);

// const transformToObject = JSON.parse(tranformFromJSON);

// console.log(transformToObject);

if (localStorage.getItem("user")) {
  const getUserInfo = JSON.parse(localStorage.getItem("user"));

  getUserInfo.map(elem => console.log(elem));
} else {
  console.log("not found");
}
