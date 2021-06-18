import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBRI-4huSCeeq-8oxCQYptiQu2bH1ssPXU",
    authDomain: "el-girasol-e4930.firebaseapp.com",
    projectId: "el-girasol-e4930",
    storageBucket: "el-girasol-e4930.appspot.com",
    messagingSenderId: "883694375156",
    appId: "1:883694375156:web:7ce2a6485ff1b436324ea1"
  }
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore()
export const itemCollection = db.collection('Items')