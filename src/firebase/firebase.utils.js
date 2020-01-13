import firebase from 'firebase/app';
import 'firebase/firestore' //for db
import 'firebase/auth' //for the authentication

const config = {
    apiKey: "AIzaSyDHFH3fEpxoJoOdGubcN1oceW2Bkbg2kUU",
    authDomain: "ycl-cart-db.firebaseapp.com",
    databaseURL: "https://ycl-cart-db.firebaseio.com",
    projectId: "ycl-cart-db",
    storageBucket: "ycl-cart-db.appspot.com",
    messagingSenderId: "624004063832",
    appId: "1:624004063832:web:292386b9da61dc6583202d",
    measurementId: "G-FV0W5YZ308"
  };

  firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestort = firebase.firestore();

//google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

