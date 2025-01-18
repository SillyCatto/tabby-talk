import React from "react";

const MessageForm = ({ message, setMessage, sendMessage }) => {
  return (
    <form
      className="flex items-center w-full max-w-md mx-auto mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage();
      }}
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type here..."
        className="input input-primary flex-grow"
      />
    </form>
  );
};

export default MessageForm;
