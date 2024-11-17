import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBORPn0MYYhKzRc6cnZc4sa6D6jLl1U3d8",
    authDomain: "cloud-crafters-f5ef7.firebaseapp.com",
    databaseURL: "https://cloud-crafters-f5ef7-default-rtdb.firebaseio.com",
    projectId: "cloud-crafters-f5ef7",
    storageBucket: "cloud-crafters-f5ef7.firebasestorage.app",
    messagingSenderId: "541122506801",
    appId: "1:541122506801:web:045a5bef209e57ece26510",
    measurementId: "G-TMSEMYQ6TN"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider }