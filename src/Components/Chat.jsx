import { useState, useEffect, useRef } from "react";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";

import { db } from "../firebase";

import Message from "./Message";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  console.log("Messages", messages);
  const scroll = useRef();

  useEffect(() => {
    const firebaseQuery = query(
      collection(db, "messages"),
      orderBy("createdAt")
    );
    console.log("fbquery", firebaseQuery);
    const unsubscribe = onSnapshot(firebaseQuery, (querySnapshot) => {
      let messages = [];
      querySnapshot.docs.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log("effect messages", messages);
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <main className="flex flex-col p-[10px] relative">
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>

      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
