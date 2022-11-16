import { auth } from "../../firebase";

const tailwind = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-yellow-300 text-black flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-gray-300 text-black float-left rounded-br-full`,
};

const Message = ({message}) => {
    const messageClassName =
    message.uid === auth.currentUser.uid ? `${tailwind.sent}` : `${tailwind.received}`

    return ( 
        <div>
            <div className={`${tailwind.message} ${messageClassName}`}>
                <p className={tailwind.name}>{message.name}</p>
                <p>{message.text}</p>
            </div>
        </div>
     );
}
 
export default Message;