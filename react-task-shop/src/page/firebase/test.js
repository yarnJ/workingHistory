import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore.collection('user').doc('6Mv4cZjTaCLLxsjZW0To').collection('cartItems').doc('GyzOxwNWWU8SojXGBAu1');
firestore.doc('/users/6Mv4cZjTaCLLxsjZW0To/cartItems/GyzOxwNWWU8SojXGBAu1');
firestore.collection('/users/6Mv4cZjTaCLLxsjZW0To/cartItems');