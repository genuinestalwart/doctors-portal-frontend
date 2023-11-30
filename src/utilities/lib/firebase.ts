import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_APIKEY,
	authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECTID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINSENDERID,
	appId: process.env.NEXT_PUBLIC_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
