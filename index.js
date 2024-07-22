import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyB423RpTNa4DkBd3KMyU_doz3b43CmZtdw",
    authDomain: "english-quiz-fda3b.firebaseapp.com",
    databaseURL: "https://english-quiz-fda3b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "english-quiz-fda3b",
    storageBucket: "english-quiz-fda3b.appspot.com",
    messagingSenderId: "363405286033",
    appId: "1:363405286033:web:03b7e8d33c9b9e36703d30",
    measurementId: "G-3GVTQRVYBT"
};

const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');




async function fblogin() {
    const userCred = await signInWithPopup(auth, provider);
    console.log(userCred?._tokenResponse);
    return userCred?._tokenResponse;
}

window.fblogin = fblogin;
