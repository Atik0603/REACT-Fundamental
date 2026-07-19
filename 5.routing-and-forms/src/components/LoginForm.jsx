import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!email.includes("@")) {
      setError("Email must contain an @ symbol.");
      setSuccess(false);
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setSuccess(false);
      return;
    }
    setError("");
    setSuccess(true);
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>
      <button onClick={handleSubmit}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Login successful!</p>}
    </div>
  );
}

export default LoginForm;