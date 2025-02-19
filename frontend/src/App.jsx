import { io } from "socket.io-client";
import Header from "./Header";
import { useEffect, useState } from "react";
import ClientCount from "./ClientCount";
import NameInput from "./NameInput";
import MessageInput from "./MessageInput";
import MessageContainer from "./MessageContainer";

const socket = io("http://localhost:3000");

function App() {
  const [totalClients, setTotalClients] = useState(0);
  const [name, setName] = useState("anonymous");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    socket.on("clients-total", (total) => setTotalClients(total));
    socket.on("chat-message", (data) => {
      setMessages((prev) => [...prev, { ...data, isOwnMessage: false }]);
    });
    socket.on("feedback", (data) => setFeedback(data.feedback));

    return () => {
      socket.off("clients-total");
      socket.off("chat-message");
      socket.off("feedback");
    };
  }, []);

  const handleTyping = (isTyping) => {
    socket.emit("feedback", {
      feedback: isTyping ? `${name} is typing...` : "",
    });
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const msgData = {
      name,
      message,
      dateTime: new Date(),
    };

    socket.emit("message", msgData);
    setMessages((prev) => [...prev, { ...msgData, isOwnMessage: true }]);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col w-full max-w-md items-center p-1 bg-neutral-300">
        <Header />
        <ClientCount count={totalClients} />
        <NameInput name={name} setName={setName} />
      </div>
      <div className="flex-grow bg-base-300 w-full max-w-md mx-auto overflow-y-scroll scroll-auto overflow-x-hidden p-2">
        <MessageContainer messages={messages} />
      </div>
      <div className="flex flex-col w-full max-w-md bottom-0 bg-neutral-300">
        <MessageInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          feedback={feedback}
          handleTyping={handleTyping}
        />
      </div>
    </div>
  );
}

export default App;
