
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBCZoANUEWSuXGfENW4sDHsA5Z1l0nILMc",
    authDomain: "mamush-3b768.firebaseapp.com",
    databaseURL:"https://mamush-3b768-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "mamush-3b768",
    storageBucket: "mamush-3b768.appspot.com",
    messagingSenderId: "445937134688",
    appId: "1:445937134688:web:e5084fbf1bac861e0c2705",
    measurementId: "G-FNS8T969P0"
  };
  
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.database()