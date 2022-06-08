import { initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpu97XE2CrljIENiLMWE69omAIDpnYxnw",
    authDomain: "auth-ex-c9684.firebaseapp.com",
    projectId: "auth-ex-c9684",
    storageBucket: "auth-ex-c9684.appspot.com",
    messagingSenderId: "431889868658",
    appId: "1:431889868658:web:fd8126031de221e1ed9feb",
    measurementId: "G-REXL100PXT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
