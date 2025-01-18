import moment from "moment";

const MessageList = ({ messages, feedback }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-md bg-base-300 w-full max-w-md mx-auto overflow-y-scroll overflow-x-hidden p-2 h-[500px]">
      <div className="space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat ${msg.isOwnMessage ? "chat-end" : "chat-start"}`}
          >
            <div className="chat-header">{msg.name}</div>
            <div
              className={`chat-bubble ${
                msg.isOwnMessage
                  ? "chat-bubble-primary"
                  : "bg-base-100 text-black"
              }`}
            >
              {msg.message}
            </div>
            <div className="chat-footer opacity-50 text-sm italic">
              {moment(msg.dateTime).fromNow()}
            </div>
          </div>
        ))}
        {feedback && (
          <li className="text-sm italic text-gray-500 text-center">
            {feedback}
          </li>
        )}
      </div>
    </div>
  );
};

export default MessageList;
