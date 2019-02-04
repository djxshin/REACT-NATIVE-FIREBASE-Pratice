 import firebase from 'firebase';


  const config = {
    apiKey: "AIzaSyANT_sox-TS0fK110WugUKb8mEvwlwfkfQ",
    authDomain: "react-firebase-38af2.firebaseapp.com",
    databaseURL: "https://react-firebase-38af2.firebaseio.com",
    projectId: "react-firebase-38af2",
    storageBucket: "react-firebase-38af2.appspot.com",
    messagingSenderId: "135431575253"
  };

  firebase.initializeApp(config);

  export const f = firebase;
  export const database = firebase.database();
  export const auth = firebase.auth();
  export const storage = firebase.storage();

 