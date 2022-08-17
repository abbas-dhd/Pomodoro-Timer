import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDdR3qNNLMe6-olRv7cuKb04_0QaxOdCjw",
    authDomain: "pomodoro-app-9310b.firebaseapp.com",
    projectId: "pomodoro-app-9310b",
    storageBucket: "pomodoro-app-9310b.appspot.com",
    messagingSenderId: "609394847201",
    appId: "1:609394847201:web:441a6dd9121a085a49b6a0",
    measurementId: "G-2RP9PQYFPH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
