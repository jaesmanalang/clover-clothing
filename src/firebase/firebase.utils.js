import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDq3-1ZFE1vi1NH9eLOy4ORUb0tU1OsqoU',
  authDomain: 'clover-clothing-7555a.firebaseapp.com',
  databaseURL: 'https://clover-clothing-7555a.firebaseio.com',
  projectId: 'clover-clothing-7555a',
  storageBucket: 'clover-clothing-7555a.appspot.com',
  messagingSenderId: '424561770239',
  appId: '1:424561770239:web:5dab555a0d71c75fab16ca',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
