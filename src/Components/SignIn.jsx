import GoogleButton from "react-google-button";

import { auth } from "../firebase"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const googleAuth = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const SignIn = () => {
    return ( 
        <div className="flex justify-center ">
            <GoogleButton onClick={googleAuth} />
        </div>
     );
}
 
export default SignIn;