import firebase from "firebase";

var firebaseConfig = {
    apiKey:  process.env.APP_KEY,//Replace it with your apiKey
    authDomain: "netflix-mern-35b95.firebaseapp.com",
    projectId: "netflix-mern-35b95",
    storageBucket: "netflix-mern-35b95.appspot.com",
    messagingSenderId: "563165382259",
    appId: "1:563165382259:web:af0c648eb9d12e17c84c06",
    measurementId: "G-M4P21F84G5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
