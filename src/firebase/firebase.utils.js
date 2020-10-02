import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyARDVpUGVF2YbdOZP1Yk2N0b6C_G58u4Fg",
  authDomain: "crwn-db-ec674.firebaseapp.com",
  databaseURL: "https://crwn-db-ec674.firebaseio.com",
  projectId: "crwn-db-ec674",
  storageBucket: "crwn-db-ec674.appspot.com",
  messagingSenderId: "838655338917",
  appId: "1:838655338917:web:a0535b5e27ad02e132a04c",
  measurementId: "G-JF8YECMWCY",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return null;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
