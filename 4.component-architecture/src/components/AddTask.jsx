function AddTask({ input, onInputChange, onAdd }) {
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default AddTask;