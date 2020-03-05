import './styles.css';
console.log('work');

// { "id": 1, "body": "some comment", "postId": 1 }

// const commit = {
//   grud: 'test json server',
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify(commit),
//   headers: {
//     'Content-Type': 'application/json',
//   },
// };

// fetch('http://localhost:3000/comments', options)
//   .then(response => response.json())
//   .then(data => console.log(data));

// document.querySelector('.text').addEventListener('change', e => {
//   const options = {
//     method: 'POST',
//     body: JSON.stringify({ value: e.target.value }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   fetch('http://localhost:3000/comments', options)
//     .then(response => response.json())
//     .then(data => console.log(data));
// });

// const options = {
//   method: 'DELETE',
// };

// fetch('http://localhost:3000/comments/3', options).then(() =>
//   console.log('delete DONE'),
// );

//get dom elements

const refs = {
  form: document.querySelector('.form'),
  profiler: document.querySelector('.profiler'),
};

const addUser = user => {
  if (Object.values(user).some(elem => elem.length < 1)) {
    console.log('data is not defined !!!!');
    return;
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch('http://localhost:3000/users', options)
    .then(response => response.json())
    .then(data => console.log('data', data));
};

const drawUserToHTML = () => {
  fetch('http://localhost:3000/users', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      refs.profiler.innerHTML = '';
      refs.profiler.insertAdjacentHTML(
        'beforeend',
        data.length
          ? data
              .map(
                user => `<li id=${user.id}>
         <h2>${user.firstName}</h2>
         <h3>${user.email}</h3>
         <button class='del'>DELETE</button>
     </li>`,
              )
              .join(' ')
          : `<h2>user not found !)</h2>`,
      );
    });
};

const deleteUser = e => {
  if (e.target.nodeName === 'BUTTON') {
    const id = e.target.closest('li').id;
    console.log(e.target.closest('li').id);
    const options = {
      method: 'DELETE',
    };

    fetch(`http://localhost:3000/users/${id}`, options).then(() => {
      console.log(`delete DONE ${id}`);
      drawUserToHTML();
    });
  }
};

refs.profiler.addEventListener('click', deleteUser);

drawUserToHTML();

const getFormInfo = e => {
  e.preventDefault();
  //   console.log(e.target);
  const user = {};
  const formData = new FormData(e.target);
  formData.forEach((value, name) => (user[name] = value));

  addUser(user);

  drawUserToHTML();
};

refs.form.addEventListener('submit', getFormInfo);
