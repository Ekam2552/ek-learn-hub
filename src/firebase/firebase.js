import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCCcepiISyfkhe3jwoXKjqGp1es3JvdnGc",
  authDomain: "ek-learn-hub.firebaseapp.com",
  projectId: "ek-learn-hub",
  storageBucket: "ek-learn-hub.appspot.com",
  messagingSenderId: "68794367799",
  appId: "1:68794367799:web:773b59a7758095c0aa64b2",
  measurementId: "G-DJK9H6HY4X",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
