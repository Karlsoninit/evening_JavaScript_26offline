import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons';
import './styles.css';
import './component/register';

import { db } from './config';

const register = async () => {
  const data = await db
    .auth()
    .createUserWithEmailAndPassword('m.m@gmail.com', 'qwerty');
  console.log(data);
  await data.user.updateProfile({
    displayName: 'Max',
  });
};

// register();

const login = async () => {
  const data = await db
    .auth()
    .signInWithEmailAndPassword('m.norets@gmail.com', 'qwerty321');
  console.log(data);
};

// login();

const signOut = () => {
  db.auth().signOut();
};

signOut();

const getInfo = async () => {
  const data = await db
    .firestore()
    .collection('users')
    .get();

  console.log(data);
  data.docs.forEach(user => console.log(user.data()));
};

// getInfo();

const createCollection = async collection => {
  const data = await db
    .firestore()
    .collection(collection)
    .get();

  data.docs.forEach(user => console.log(user.data()));
};

db.auth().onAuthStateChanged(function(user) {
  console.log('----', user);
  if (user) {
    // document.querySelector('.registerContainer').innerHTML = '';
    document.querySelector('.authContainer').textContent = 'hello';
    setTimeout(() => {
      document.querySelector('.registerContainer').style.display = 'none';
    }, 1500);
    // getInfo();
    createCollection('drive');
  } else {
    document.querySelector('.authContainer').textContent = 'bay';
  }
});
