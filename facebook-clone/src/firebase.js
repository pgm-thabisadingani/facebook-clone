// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC5yS8pltx3FxVY8ze_aUSMOZ7NKwm0mbY",
  authDomain: "facebook-clone-9ff0d.firebaseapp.com",
  databaseURL: "https://facebook-clone-9ff0d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "facebook-clone-9ff0d",
  storageBucket: "facebook-clone-9ff0d.appspot.com",
  messagingSenderId: "457734465313",
  appId: "1:457734465313:web:de5526e3e6935b833a8060",
  measurementId: "G-RDQC74TTNG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;