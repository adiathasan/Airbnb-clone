import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBh6QKd565Ua5jTQQ3fK_xqCHMs3_G6pCk",
  authDomain: "airbnb-clone-ad.firebaseapp.com",
  databaseURL: "https://airbnb-clone-ad.firebaseio.com",
  projectId: "airbnb-clone-ad",
  storageBucket: "airbnb-clone-ad.appspot.com",
  messagingSenderId: "266161893638",
  appId: "1:266161893638:web:0cc6207c4a1e76afdf6e87",
  measurementId: "G-CFGLTSNF7F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export default firestore;
export { auth, authProvider, timeStamp };
