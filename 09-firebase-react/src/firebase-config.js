import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBqvKy1QFczmQrSWR9s1m9SJ6UD7aMhwPc",
    authDomain: "reactfirebase-cea21.firebaseapp.com",
    projectId: "reactfirebase-cea21",
    storageBucket: "reactfirebase-cea21.appspot.com",
    messagingSenderId: "361864091215",
    appId: "1:361864091215:web:42d2edf2fc415f4c687c3a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
