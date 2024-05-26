import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDBobP_j1JWP4xAmFt0y-vToO4d7YMmrTY",
    authDomain: "disneyplus-clone-b8ff8.firebaseapp.com",
    projectId: "disneyplus-clone-b8ff8",
    storageBucket: "disneyplus-clone-b8ff8.appspot.com",
    messagingSenderId: "634153994468",
    appId: "1:634153994468:web:f9ece5d551b83baf0304f1",
    measurementId: "G-DDCR3Y2EWP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
// const storage = firebase.storage()

export { auth, provider };
export default db;
