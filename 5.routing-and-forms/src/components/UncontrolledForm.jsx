import { useRef, useState } from "react";

function UncontrolledForm() {
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleShow = () => {
    const value = inputRef.current.value;
    if (value === "") {
      setMessage("Nothing to display");
    } else {
      setMessage(value);
    }
  };

  return (
    <div>
      <h2>Uncontrolled Form</h2>
      <input ref={inputRef} type="text" placeholder="Type something" />
      <button onClick={handleShow}>Show Value</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UncontrolledForm;