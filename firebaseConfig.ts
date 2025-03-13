import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKt7nKh24Yd6Zf5hb5cXBcyQK9-bopLCc",
    authDomain: "briliantdo-architect.firebaseapp.com",
    projectId: "briliantdo-architect",
    storageBucket: "briliantdo-architect.firebasestorage.app",
    messagingSenderId: "104557718797",
    appId: "1:104557718797:web:3360d681f69aa172179444",
    measurementId: "G-GZ55HG7SKK"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
