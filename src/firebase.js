import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCleQ5ZSdDIEKtznxa58ZXUGi6Bmxd_RXk",
    authDomain: "helloworld-6581b.firebaseapp.com",
    databaseURL: "https://helloworld-6581b.firebaseio.com",
    projectId: "helloworld-6581b",
    storageBucket: "helloworld-6581b.appspot.com",
    messagingSenderId: "918515101075",
    appId: "1:918515101075:web:5dfbe29f55ade42e630c66",
    measurementId: "G-HQMT1NFXRR"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };