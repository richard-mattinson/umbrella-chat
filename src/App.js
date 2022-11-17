import Navbar from "./Components/Nav/Navbar";
import Landing from "./Components/Body/Landing";
import Chat from "./Components/Body/Chat";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  console.log("User", user);
  return (
    <div className="max-w-[728px] mx-auto text-center">
      <section className="flex flex-col h-full bg-gray-100 mt-10 mb-10 shadow-xl border relative">
        <Navbar />
        {user ? <Chat /> : <Landing />}
      </section>
    </div>
  );
}

export default App;
