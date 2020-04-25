import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDN7NvOdg2Rb6xJdDe0LxhI90syqqCS8y0",
    authDomain: "chatapp-bof.firebaseapp.com",
    databaseURL: "https://chatapp-bof.firebaseio.com",
    projectId: "chatapp-bof",
    storageBucket: "chatapp-bof.appspot.com",
    messagingSenderId: "146573693802",
    appId: "1:146573693802:web:649ff9bd1e32ee322a8b13",
    measurementId: "G-925LL65Q0W"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore()

  firebase.analytics();