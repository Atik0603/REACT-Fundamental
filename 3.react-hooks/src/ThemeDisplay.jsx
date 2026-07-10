import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeDisplay() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor: theme === "light" ? "#ffffff" : "#333333",
      color: theme === "light" ? "#000000" : "#ffffff",
      padding: "20px"
    }}>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
}

export default ThemeDisplay;