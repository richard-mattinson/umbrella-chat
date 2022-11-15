import { auth } from "../firebase";

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };
  return (
    <>
      <p>{}</p>
      <button
        className="bg-gray-200 px-4 py-2 hover:bg-gray-100"
        onClick={() => auth.signOut()}
      >
        Log out
      </button>
    </>
  );
};

export default LogOut;
