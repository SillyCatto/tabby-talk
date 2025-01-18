const NameInput = ({ name, setName }) => {
  return (
    <div className="w-full max-w-md mb-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength="20"
        placeholder="Enter your name"
        className="input input-sm input-ghost focus:bg-inherit focus:outline-none focus:border-none"
      />
    </div>
  );
};

export default NameInput;
