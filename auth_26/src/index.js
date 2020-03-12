import './styles.css';
import { db } from './config';

const register = async () => {
  const data = await db
    .auth()
    .createUserWithEmailAndPassword('max77@gmail.com', 'qwerty');
  console.log(data);
};

// register();

const login = async () => {
  const data = await db
    .auth()
    .signInWithEmailAndPassword('max77@gmail.com', 'qwerty');
  console.log(data);
};

// login();

const signOut = () => {
  db.auth().signOut();
};

// signOut();

const getInfo = async () => {
  const data = await db
    .firestore()
    .collection('drive')
    .get();

  console.log(data);
  data.docs.forEach(user => console.log(user.data()));
};

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
    document.querySelector('.authContainer').textContent = 'hello';
    // getInfo();
    createCollection('drive');
  } else {
    document.querySelector('.authContainer').textContent = 'bay';
  }
});
