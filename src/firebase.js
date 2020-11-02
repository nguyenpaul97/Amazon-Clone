import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAA9YCDTBfeQU9JHGVXtw_k3WRcHDrFYyc',
  authDomain: 'clone-186ed.firebaseapp.com',
  databaseURL: 'https://clone-186ed.firebaseio.com',
  projectId: 'clone-186ed',
  storageBucket: 'clone-186ed.appspot.com',
  messagingSenderId: '642931510763',
  appId: '1:642931510763:web:24c78ca3866ce55f6fddae',
  measurementId: 'G-LEWVHR5TFZ',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
