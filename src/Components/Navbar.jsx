import SignIn from "./SignIn";
import LogOut from "./LogOut";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    return (
      <nav className="bg-yellow-400 h-20 flex justify-between items-center p-4">
        <h1 className="text-black text-3xl font-['Teko']">
          scrolls{" "}
        </h1>
        {user ? <LogOut /> : <SignIn />}
      </nav>
    );
}
 
export default Navbar;