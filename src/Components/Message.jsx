const tailwind = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `fixed mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-blue-500 text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-blue-100 text-black float-left rounded-br-full`
};

const Message = ({message}) => {
    return ( 
        <div>
            <div className={tailwind.message}>
                <p className={tailwind.name}>V</p>
                <p className="">{message.text}</p>
            </div>
        </div>
     );
}
 
export default Message;