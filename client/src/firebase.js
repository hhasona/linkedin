// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDiviJVjwE32biSx48VhjFn8xp_4AnpZkA",
  authDomain: "linkedin-clone-54dc4.firebaseapp.com",
  projectId: "linkedin-clone-54dc4",
  storageBucket: "linkedin-clone-54dc4.appspot.com",
  messagingSenderId: "884338234920",
  appId: "1:884338234920:web:81118587563910a975471d",
  measurementId: "G-2EEN25KRXD",
}

const firebaseApp = firebase.initializeApp(firebaseConfig) // connect to firebase
const db = firebaseApp.firestore() // connect to database
const auth = firebase.auth() // connect to authentication

export { db, auth }
