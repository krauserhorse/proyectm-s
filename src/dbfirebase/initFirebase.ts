import { initializeApp } from "@firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBxNcw2FaXVy1LwIHeJavCI33NtvNZX23Q",
  authDomain: "m-subate.firebaseapp.com",
  projectId: "m-subate",
  storageBucket: "m-subate.appspot.com",
  messagingSenderId: "385200448205",
  appId: "1:385200448205:web:20cbf9e774e80f0c217f84",
};

const app = initializeApp(firebaseConfig);

export default app;