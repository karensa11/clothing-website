import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBpwdt6vN1iw3aZqdBdk5-JR4Z3w_xk_I0",
    authDomain: "clothing-website-8bf81.firebaseapp.com",
    databaseURL: "https://clothing-website-8bf81.firebaseio.com",
    projectId: "clothing-website-8bf81",
    storageBucket: "clothing-website-8bf81.appspot.com",
    messagingSenderId: "39750882476",
    appId: "1:39750882476:web:026db2c96aa6f129ca7b09",
    measurementId: "G-QBTX5GYQT9"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;