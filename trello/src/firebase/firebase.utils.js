import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDg2xdSq2S1GT5ljubLVRwTbxNvUW4948Y",
  authDomain: "cwrn-db-5bcbf.firebaseapp.com",
  databaseURL: "https://cwrn-db-5bcbf-default-rtdb.firebaseio.com",
  projectId: "cwrn-db-5bcbf",
  storageBucket: "cwrn-db-5bcbf.appspot.com",
  messagingSenderId: "1097450342851",
  appId: "1:1097450342851:web:729af72c6d47b4d98e5576",
  measurementId: "G-7LQENWYRRX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;