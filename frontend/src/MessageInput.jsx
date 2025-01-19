import { FaArrowRight } from "react-icons/fa6";

const MessageInput = ({
  message,
  setMessage,
  sendMessage,
  feedback,
  handleTyping,
}) => {
  return (
    <div>
      <div className="flex items-center w-full max-w-md p-2 m-0 font-roboto">
        <form
          className="flex items-center w-full max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <input
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              handleTyping(true);
            }}
            onBlur={() => handleTyping(false)}
            placeholder="Type here..."
            className="input input-primary input-sm flex-grow outline-none"
          />
          <div className="ml-2">
            <button type="submit" className="btn btn-primary btn-sm">
              <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-start font-roboto text-sm italic text-black opacity-50 p-1 m-0">
        {feedback ? <p>{feedback}</p> : <p>&nbsp;</p>}
      </div>
    </div>
  );
};

export default MessageInput;
