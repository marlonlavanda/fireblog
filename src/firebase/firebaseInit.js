import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {

  apiKey: "AIzaSyBVoKM7zhBSnfvhJ4G1Eqm4O4JOHgzvLcs",

  authDomain: "fireblogsml.firebaseapp.com",

  projectId: "fireblogsml",

  storageBucket: "fireblogsml.appspot.com",

  messagingSenderId: "462639105981",

  appId: "1:462639105981:web:53c9937f5ec519aaf9f4d4"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();