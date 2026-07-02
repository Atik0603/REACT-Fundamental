import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type a name"
      />
      <button onClick={() => alert(name)}>
        Show Name
      </button>
    </div>
  );
}

export default NameForm;