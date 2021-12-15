import firebase from "firebase/compat/app";
//import firebase from "firebase";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyD8Xxoj7aTmzPTzf0EoWdibDgSBNOKjl-8",
    authDomain: "crud-app-9437f.firebaseapp.com",
    projectId: "crud-app-9437f",
    storageBucket: "crud-app-9437f.appspot.com",
    messagingSenderId: "228421564439",
    appId: "1:228421564439:web:642e9cbb1be1f4f15f0452"
  };

const firebasedb=firebase.initializeApp(firebaseConfig);
export default firebasedb.database().ref();