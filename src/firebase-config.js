import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAVWHb_tsW8OZ_Ma19QiWKnQE9UNi9_wpI",
	authDomain: "adanian-d7871.firebaseapp.com",
	projectId: "adanian-d7871",
	storageBucket: "adanian-d7871.appspot.com",
	messagingSenderId: "148921649438",
	appId: "1:148921649438:web:718f7d1902c272d7c2e10f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
