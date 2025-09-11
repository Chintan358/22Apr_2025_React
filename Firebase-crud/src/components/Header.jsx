import { signOut, getAuth } from "firebase/auth"
import { app } from '../firebase-config'
import { Link } from "react-router-dom"

export const Header = () => {
    const auth = getAuth(app)
    return <>
        <div>
            <Link to="/">Home</Link> |
            <Link to="/reg">Registration</Link> |
            <button onClick={() => signOut(auth)}>Signout</button>

        </div>
    </>
}