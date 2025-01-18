import moment from "moment";

const MessageContainer = ({ messages }) => {
  return (
    <div className="space-y-2">
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
    </div>
  );
};

export default MessageContainer;
