// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAB_Rhz-gNPzwwtJ-zcVI9n10W2ohdC4K8",
    authDomain: "tubeshad-web-app.firebaseapp.com",
    projectId: "tubeshad-web-app",
    storageBucket: "tubeshad-web-app.firebasestorage.app",
    messagingSenderId: "583085991602",
    appId: "1:583085991602:web:9ed85f0bb0887f77738bab",
    measurementId: "G-RTZMWZPK16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);