import SignIn from "../Account/SignIn";
import LogOut from "../Account/LogOut";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <>
      <nav className="sticky top-0 bg-yellow-400 h-20 flex justify-between items-center p-4 z-50">
        <div>
          <h1 className="text-black text-3xl font-['Teko'] float-left mr-2">
            scrolls{" "}
          </h1>
          {user ? (
            <div className="text-sm hover:text-yellow-700 transition whitespace-nowrap overflow-hidden">
              <a
                href="https://github.com/richard-mattinson"
                target="_blank"
                rel="noopener noreferrer"
              >
                by Richard Mattinson
              </a>
            </div>
          ) : null}
        </div>
        {user ? <LogOut /> : <SignIn />}
      </nav>
    </>
  );
};

export default Navbar;
