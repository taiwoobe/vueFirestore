import firebase from 'firebase'
import "@firebase/firestore";
  
  // Initialize Firebase
  export const config = {
    apiKey: "AIzaSyCmDyeWN3XYfuqJ-nJEsgSXSGQGaIXQMH8",
    authDomain: "vuefirebase-84e8c.firebaseapp.com",
    databaseURL: "https://vuefirebase-84e8c.firebaseio.com",
    projectId: "vuefirebase-84e8c",
    storageBucket: "vuefirebase-84e8c.appspot.com",
    messagingSenderId: "34821206390"
  };
  firebase.initializeApp(config);
// End of Initialization