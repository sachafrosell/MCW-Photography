import firebase from 'firebase/app'
import 'firebase/storage'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB-1IKz4Nd07AlVT9l3xskNioKP94UOysc",
  authDomain: "mcw-photography.firebaseapp.com",
  databaseURL: "https://mcw-photography.firebaseio.com",
  projectId: "mcw-photography",
  storageBucket: "mcw-photography.appspot.com",
  messagingSenderId: "663620766982"
};
firebase.initializeApp(config);

const storage = firebase.storage()

export {
  storage,firebase as default
}
