import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDB35yqGaiVWDEelukplKnZ_RLwZzFodH8",
  authDomain: "greenshop-9fdab.firebaseapp.com",
  projectId: "greenshop-9fdab",
  storageBucket: "greenshop-9fdab.appspot.com",
  messagingSenderId: "325061059054",
  appId: "1:325061059054:web:c6ea9c025d874d72532eff",
  measurementId: "G-RGCW57FMCL",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { signInWithGoogle };
