const refs = {
  template: document.querySelector("#template"),
  renderBox: document.querySelector(".renderBox")
};

console.log(refs.template);

const users = [
  {
    name: "Ben",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fawesomestufftobuy.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fbob-ross-lego-set-580x580.jpg&f=1&nofb=1",
    active: true
  },
  {
    name: "Bob",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-aWoJ2BTVPCA%2FTWKq5T8qmWI%2FAAAAAAAAJ5g%2FpC7nVDCO1bs%2Fs1600%2Fbob%2Besponja%2Blego.jpg&f=1&nofb=1",
    active: false
  },
  {
    name: "Jack",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F01-kiU3pT5E%2Fhqdefault.jpg&f=1&nofb=1",
    active: true
  },
  {
    name: "Pitter",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fm-ofZGuxYeI%2Fmaxresdefault.jpg&f=1&nofb=1",
    active: true
  }
];

const template = refs.template.innerHTML.trim();
console.log(template);

const transformHBS = Handlebars.compile(template);

refs.renderBox.innerHTML = transformHBS(users);

// refs.renderBox.insertAdjacentHTML(
//   "beforeend",
//   users.map(user => transformHBS(user)).join(" ")
// );
