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

export const creatUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({ 
        displayName,
        email,
        createdAt,
        ...additionalData
       })
    }catch(error) {
      console.log('error creating user', error.message);
    }
  // }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const convertCollectionsSnapShotToMap = collection => {
  const transformedCollection = collection.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

// export const addCollectinAndDocuments = (collectionKey, objectsToAdd) => {

//   SHOP_DATA.forEach(function(obj) {
//     firestore.collection(collectionKey).add({
//         id: obj.id,
//         title: obj.title,
//         routeName: obj.routeName,
//         items: obj.items
//     }).then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
// });
// };

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;