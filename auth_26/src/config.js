import * as firebase from 'firebase';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};
// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig);
