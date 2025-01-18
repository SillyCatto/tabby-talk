const NameInput = ({ name, setName }) => {
  return (
    <div className="form-control w-full max-w-md mx-auto mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength="20"
        placeholder="Enter your name"
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default NameInput;
