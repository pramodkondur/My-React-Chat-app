import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDtBMl8i7G99dDrP7m_QM5uA351mzcd1sc",
  authDomain: "my-react-app-97149.firebaseapp.com",
  databaseURL: "https://my-react-app-97149.firebaseio.com",
  projectId: "my-react-app-97149",
  storageBucket: "my-react-app-97149.appspot.com",
  messagingSenderId: "870700465603",
  appId: "1:870700465603:web:d23081e0cf4d6845639176",
  measurementId: "G-F5F9DQVNPD"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase;