import { FaPaperPlane } from "react-icons/fa6";

const MessageInput = ({ message, setMessage, sendMessage }) => {
  return (
    <form
      className="flex items-center w-full max-w-md mx-auto mt-2 bottom-0 fixed p-2 bg-neutral-300"
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
      <button type="submit" className="btn btn-primary ml-2">
        <FaPaperPlane />
      </button>
    </form>
  );
};

export default MessageInput;
