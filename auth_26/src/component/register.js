import { db } from '../config';

const refs = {
  form: document.querySelector('.form'),
  messageContainer: document.querySelector('.messageContainer'),
};

const handleSubmit = async e => {
  e.preventDefault();
  try {
    const formData = new FormData(e.target);
    const user = {};
    formData.forEach((value, name) => (user[name] = value));
    if (user.password === user.confirmPassword) {
      const data = await db
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      console.log(data);
      await data.user.updateProfile({
        displayName: user.first_name,
      });
    }
    refs.messageContainer.innerHTML = `<p class='messageSuccess'>Hi, register success</p>`;
  } catch (error) {
    refs.messageContainer.innerHTML = `<p class='messageError'>${error.message}</p>`;
  }
};

refs.form.addEventListener('submit', handleSubmit);
