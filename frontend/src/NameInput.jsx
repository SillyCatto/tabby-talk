const NameInput = ({ name, setName }) => {
  return (
    <div className="w-full max-w-md">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength="20"
        placeholder="Enter your name"
        className="input input-sm input-ghost outline-none  border-none focus:bg-inherit focus:outline-none focus:border-none"
      />
    </div>
  );
};

export default NameInput;
