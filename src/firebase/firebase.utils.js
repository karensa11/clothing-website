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
}; // token for firebase authentication taken from firebase

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export async function createUserProfileDocument(user) {
    console.log('creating user with details');
    console.log(user);
    const ref = firestore.doc(`users/${user.uid}`);
    const snapshot = await ref.get();
    if(!snapshot.exists) { // create the entry for the user if not found
        const {displayName, email} = user;
        const createdAt = new Date();
        try {
            await ref.set({
                displayName,
                email,
                createdAt
            })
        } catch (err) {
            console.log('failed to create '+err.message);
        }
    }
    return ref;
}

export default firebase;
