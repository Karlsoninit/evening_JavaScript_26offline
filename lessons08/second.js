const refs = {
  text: document.querySelector(".text"),
  void: document.querySelector(".void"),
  btn: document.querySelectorAll(".btn"),
  btnGroup: document.querySelector(".btn-group")
};

// console.log(refs.text);

// const handleChange = event => {
//   console.log(event.target.value);
// };

// refs.text.addEventListener("input", handleChange);

// window.addEventListener("keydown", e => {
//   if (e.key === "Enter") {
//     refs.void.innerHTML = event.target.value ? event.target.value : "text";
//   }
//   if (e.key === "Escape") {
//     refs.void.innerHTML = "";
//   }
// });

//-------------

// console.log(refs.btn);
//------------ removeEventListener

// const handleClick = evt => {
//   console.log(evt.target.textContent);
//   evt.target.removeEventListener("click", handleClick);
// };

// refs.btn.forEach(elem => elem.addEventListener("click", handleClick));

//-------------- addEventListener
const handleClick = e => {
  const target = e.target;
  console.log(event);
  if (target.nodeName !== "SPAN") {
    return;
  }
  console.log(target.textContent);
  target.classList.add("show");
  //   console.log(currentTarget);
  console.log("closest", target.closest(".btn-group"));
  target.closest(".btn-list").remove();
  //   evt.target.remove();
  //   evt.target.style.backgroundColor = "red";
};

refs.btnGroup.addEventListener("click", handleClick);
