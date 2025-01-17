import { io } from "socket.io-client";
import Title from "./Title";
import { useEffect, useState } from "react";

const socket = io();

function App() {
  const [totalClients, setTotalClients] = useState(0);
  const [name, setName] = useState("anonymous");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    socket.on("clients-total", (total) => setTotalClients(total));
    socket.on("chat-message", (data) => {
      setMessages((prev) => [...prev, { ...data, isOwn: false }]);
    });
    socket.on("feedback", (data) => setFeedback(data.feedback));

    return () => {
      socket.off("clients-total");
      socket.off("chat-message");
      socket.off("feedback");
    };
  }, []);

  const handleTyping = () => {
    socket.emit("feedback", { feedback: `${name} is typing...` });
  };

  const stopTyping = () => {
    socket.emit("feedback", { feedback: "" });
  };

  return (
    <>
      <div className="flex flex-col items-center p-4">
        <Title />
      </div>
    </>
  );
}

export default App;
