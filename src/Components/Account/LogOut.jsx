import { auth } from "../../firebase";

const LogOut = () => {
  // eslint-disable-next-line no-unused-vars
  const signOut = () => {
    signOut(auth);
  };
  return (
    <>
      <p>{}</p>
      <button
        className="bg-gray-700 text-white px-4 py-2 hover:bg-gray-500"
        onClick={() => auth.signOut()}
      >
        Log out
      </button>
    </>
  );
};

export default LogOut;
