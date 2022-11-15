import Navbar from "./Components/Navbar";
import Chat from "./Components/Chat";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth"

function App() {
  const [user] = useAuthState(auth)
  console.log("User", user);
  return (
    <div className="max-w-[728px] mx-auto text-center">
        <section className="flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative">
          <Navbar />
          <Chat />
          
        </section>
    </div>
  );
}

export default App;
