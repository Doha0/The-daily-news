// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtsQDN7u-NlSEtPMQPKhrnxzOsmzJf1jc",
    authDomain: "the-daily-news-101.firebaseapp.com",
    projectId: "the-daily-news-101",
    storageBucket: "the-daily-news-101.appspot.com",
    messagingSenderId: "686838020857",
    appId: "1:686838020857:web:b82cef0f86042f4db8c028"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;