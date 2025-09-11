import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { app } from "../firebase-config"

const Reg = () => {

    const auth = getAuth(app)

    const register = () => {
        createUserWithEmailAndPassword(auth, "kishan@gmail.com", "kishan123").then(resp => {
            console.log(resp);
        }).catch(err => {
            console.log(err);
        })
    }

    const login = () => {
        signInWithEmailAndPassword(auth, "kishan@gmail.com", "kishan123").then(resp => {
            console.log(resp);
        }).catch(err => {
            console.log(err);
        })
    }

    const socialaccount = () => {

        signInWithPopup(auth, new GoogleAuthProvider()).then(resp => {
            console.log(resp);

        }).catch(err => {
            console.log(err);

        })
    }


    return <>
        <h1>Registration From</h1>
        <button onClick={register}>register</button>
        <button onClick={login}>Login</button>

        <button onClick={socialaccount}>Sign In with Google</button>
    </>
}

export default Reg