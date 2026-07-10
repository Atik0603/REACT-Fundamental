// src/exercise/useTimer.jsx

import { useState, useEffect } from "react";

function useTimer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}

export default useTimer;