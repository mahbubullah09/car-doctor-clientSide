// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.Mahbub_apiKey,
  authDomain:import.meta.env.Mahbub_authDomain,
  projectId:import.meta.env.Mahbub_projectId,
  storageBucket:import.meta.env.Mahbub_storageBucket,
  messagingSenderId:import.meta.env.Mahbub_messagingSenderId,
  appId:import.meta.env.Mahbub_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;