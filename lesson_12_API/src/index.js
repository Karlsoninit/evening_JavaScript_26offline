import './components/testApi';
// import './styles.css';
// // import 'materialize-css/sass/materialize.scss';
// import { Services } from './services';

// const options = {
//   key: 'ed5ebee752754cf7a93918ae83acba6f',
//   baseName: 'rolex',
// };

// const optionsMax = {
//   key: 'ed5ebee752754cf7a93918ae83acba6f',
//   baseName: 'chine',
// };

// const max = new Services(optionsMax);
// console.log(max);

// max
//   .fetchNews()
//   .then(response => response.json())
//   .then(data => max.template(data.articles))
//   .finally(max.loaderOf());

// const next = () => {
//   max.nextPage();
//   max
//     .fetchNews()
//     .then(response => response.json())
//     .then(data => max.template(data.articles));
// };

// max.refs.nextPage.addEventListener('click', next);

// const handleGetFormValue = evt => {
//   evt.preventDefault();
//   console.log(evt.target.elements);

//   const formData = new FormData(evt.target);

//   formData.forEach((value, name) => {
//     max
//       .fetchNews(value)
//       .then(response => response.json())
//       .then(data => {
//         max.resetPage(value);
//         console.log('data', data);
//         if (!data.articles.length) {
//           max.notFound();
//           return;
//         }
//         max.template(data.articles);
//       });
//   });
// };

// max.refs.form.addEventListener('submit', handleGetFormValue);
