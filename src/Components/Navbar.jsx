import SignIn from "./SignIn";
import LogOut from "./LogOut";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    return ( 
        <nav className="bg-gray-800 h-20 flex justify-between items-center p-4">
            <h1 className="text-white text-3xl"> umbrella </h1>
            {user ? 
            <LogOut /> :
            <SignIn />
            }
        </nav>
     );
}
 
export default Navbar;