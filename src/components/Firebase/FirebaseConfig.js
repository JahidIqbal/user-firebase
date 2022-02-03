import Firebase from 'firebase/compat/app';
import 'firebase/compat/database'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxQL7k5n6_2ywhk2_f0n0Lm-02k5CRXFE",
    authDomain: "deevsoft-firebase.firebaseapp.com",
    databaseURL: "https://deevsoft-firebase-default-rtdb.firebaseio.com",
    projectId: "deevsoft-firebase",
    storageBucket: "deevsoft-firebase.appspot.com",
    messagingSenderId: "24355447529",
    appId: "1:24355447529:web:c33f12da72fc46b7fc8678"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

export default Firebase;