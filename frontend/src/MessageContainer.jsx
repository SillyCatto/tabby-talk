import moment from "moment";

const MessageContainer = ({ messages }) => {
  return (
    <div className="space-y-2 font-roboto">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`chat ${msg.isOwnMessage ? "chat-end" : "chat-start"}`}
        >
          <div className="chat-header opacity-70">{msg.name}</div>
          <div
            className={`chat-bubble break-words max-w-[75%] overflow-hidden ${
              msg.isOwnMessage
                ? "chat-bubble-primary"
                : "bg-base-100 text-black"
            }`}
          >
            {msg.message}
          </div>
          <div className="chat-footer opacity-50 text-xs italic">
            {moment(msg.dateTime).fromNow()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageContainer;
