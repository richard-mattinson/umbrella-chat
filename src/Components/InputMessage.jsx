import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase"


const tailwind = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
  input: `leading-2 w-full text-xl p-3 bg-black text-white outline-none border-none`,
  button: `w-[20%] bg-yellow-500 hover:bg-black font-medium hover:text-yellow-500 border delay-50 duration-300
  hover:font-bold hover:border-solid hover:border-4 hover:border-yellow-500`,
};

const InputMessage = ({scroll}) => {
    const [input, setInput] = useState("")
    const submitMessage = async (e) => {
        e.preventDefault()
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, "messages"), {
            text: input,
            name: displayName,
            uid,
            createdAt: serverTimestamp()
        })
        setInput("")
    }
    return ( 
        <form onSubmit={submitMessage} className={tailwind.form}>
            <input 
                className={tailwind.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                placeholder="Scroll it, choom"
                required
             />
            <button 
                className={tailwind.button}
                type="submit">scroll
            </button>
        </form>
     );
}
 
export default InputMessage;