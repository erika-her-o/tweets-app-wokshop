import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDv8IvTuYlyO1hp68_Av5U4DsD5YYHX-HE",
    authDomain: "tweets-464e1.firebaseapp.com",
    projectId: "tweets-464e1",
    storageBucket: "tweets-464e1.appspot.com",
    messagingSenderId: "467588246262",
    appId: "1:467588246262:web:8e34309544e2c13c771ad7"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Exporta la funcionalidad de la DB
export const firestore = firebase.firestore()
// exporta el paquete de firebase para poder usarlo
export default firebase