const MessageList = ({ messages, feedback }) => {
  return (
    <div className="card bg-base-300 shadow-md max-w-md mx-auto p-4 h-96 overflow-y-auto">
      <ul className="space-y-2">
        {messages.map((msg, index) => {
          <li
            key={index}
            className={`p-3 rounded-lg ${
              msg.isOwnMessage
                ? "bg-primary text-white self-end"
                : "bg-base-100 text-gray-800 self-start"
            }`}
          >
            <p>{msg.message}</p>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default MessageList;
