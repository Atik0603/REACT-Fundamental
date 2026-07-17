import { useState } from "react";

function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <p>{isLoggedIn ? "Welcome!" : "Please sign in."}</p>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
}

export default LoginToggle;