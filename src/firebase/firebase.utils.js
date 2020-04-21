import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDacy02OxIS10u6OmWPvnoHFyLns19reUs",
    authDomain: "crwn-db-b5e51.firebaseapp.com",
    databaseURL: "https://crwn-db-b5e51.firebaseio.com",
    projectId: "crwn-db-b5e51",
    storageBucket: "crwn-db-b5e51.appspot.com",
    messagingSenderId: "307804452184",
    appId: "1:307804452184:web:5aa0ed24fc5a85d816612d",
    measurementId: "G-2TWBRL0GCT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;