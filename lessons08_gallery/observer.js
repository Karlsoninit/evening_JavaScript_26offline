// const galleryItems = [
//   {
//     preview: "./images/christ.jpg",
//     fullview: "./images/christ-the-redeemer-Big.jpg",
//     alt: "alt text 1"
//   },
//   {
//     preview: "./images/man-and-woman.jpg",
//     fullview: "./images/man-and-woman-Big.jpg",
//     alt: "alt text 2"
//   },
//   {
//     preview: "./images/people-inside.jpg",
//     fullview: "./images/people-inside-building-Big.jpg",
//     alt: "alt text 3"
//   },
//   {
//     preview: "./images/photo-of-cloud.jpg",
//     fullview: "./images/photo-of-cloud-Big.jpg",
//     alt: "alt text 4"
//   },
//   {
//     preview: "./images/two-men-performs.jpg",
//     fullview: "./images/two-men-performs-Big.jpg",
//     alt: "alt text 5"
//   },
//   {
//     preview: "./images/woman-wearing.jpg",
//     fullview: "./images/woman-wearing-Big.jpg",
//     alt: "alt text 6"
//   }
// ];

// const defaultImage =
//   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmybroadband.co.za%2Fnews%2Fwp-content%2Fuploads%2F2017%2F04%2FTwitter-profile-picture.jpg&f=1&nofb=1";

// const observContainer = document.querySelector(".observContainer");
// observContainer.insertAdjacentHTML(
//   "beforeend",
//   galleryItems
//     .map(
//       elem =>
//         `<li class='item'><img src='${defaultImage}' data-full='${elem.preview}'/></li>`
//     )
//     .join(" ")
// );

// const refs = {
//   image: document.querySelectorAll("img")
//   //   observContainer: document.querySelector(".observContainer")
// };
// console.log("-- ! --", refs.image);

// const lazyLoad = elem => {
//   console.log(elem);
//   const options = {};
//   const obs = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         console.log(entry.target.dataset.full);
//         const image = entry.target.dataset.full;
//         console.log(image);
//         entry.target.setAttribute("src", image);
//         observer.disconnect();
//       }
//     });
//   }, options);
//   obs.observe(elem);
// };

// refs.image.forEach(elem => lazyLoad(elem));

//------------

window.addEventListener("scroll", () => {
  _.throttle(() => {
    console.log("Scroll event handler invocation every 300ms.");
  }, 300);
});

console.log('fdg')