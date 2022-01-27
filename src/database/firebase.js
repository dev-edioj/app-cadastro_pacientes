import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAP-Xpjykeij6RGjUMjaQSF87LjYlvA_iQ",
  authDomain: "app-pacientes-1fa78.firebaseapp.com",
  projectId: "app-pacientes-1fa78",
  storageBucket: "app-pacientes-1fa78.appspot.com",
  messagingSenderId: "379401342823",
  appId: "1:379401342823:web:efdfbdcc17e3163fec29c2"
};

let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
