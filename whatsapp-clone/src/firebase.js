import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0JoV3-6Kg4YqOnpYdPOi3v7K53RWhUz4",
  authDomain: "whatsapp-clone-78b77.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-78b77.firebaseio.com",
  projectId: "whatsapp-clone-78b77",
  storageBucket: "whatsapp-clone-78b77.appspot.com",
  messagingSenderId: "984528169704",
  appId: "1:984528169704:web:5fd2bf3f42d4472ab3b75d",
  measurementId: "G-YQEF5HFK7H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
