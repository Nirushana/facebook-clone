import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA002ARpguvHCISmuDMBa9-xNGMg20MPSE",
    authDomain: "facebook-clone-3fb0f.firebaseapp.com",
    databaseURL: "https://facebook-clone-3fb0f.firebaseio.com",
    projectId: "facebook-clone-3fb0f",
    storageBucket: "facebook-clone-3fb0f.appspot.com",
    messagingSenderId: "171044832378",
    appId: "1:171044832378:web:1ac401d3f7a756e03267c3",
    measurementId: "G-371V67YZL3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;