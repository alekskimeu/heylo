import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCy3qESOxDxETiNOdXQ8qpDakUZQjGKzPQ",
	authDomain: "apex-399f2.firebaseapp.com",
	projectId: "apex-399f2",
	storageBucket: "apex-399f2.appspot.com",
	messagingSenderId: "690631014307",
	appId: "1:690631014307:web:680c8f06c91351d94ccc16",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
