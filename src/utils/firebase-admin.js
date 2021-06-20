import admin from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB4AMu_1aLw8klRQEtIY70XFlTPvfkTinQ",
  authDomain: "fir-d9861.firebaseapp.com",
  databaseURL: "https://fir-d9861.firebaseio.com",
  projectId: "fir-d9861",
  storageBucket: "fir-d9861.appspot.com",
  messagingSenderId: "936442884198",
  appId: "1:936442884198:web:c2fa1461ce725f1bf1bda7",
  measurementId: "G-FTXH1NGCS8",
};

admin.initializeApp(firebaseConfig);

const db = admin.firestore();

export { admin, db };
