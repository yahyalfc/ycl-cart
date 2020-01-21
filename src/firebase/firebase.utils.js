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
  

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    console.log(snapShot)
    
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {   
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
             console.log('error creating user', error.message); 
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

