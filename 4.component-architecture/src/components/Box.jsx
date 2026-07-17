import styles from "./Box.module.css";

function Box() {
  const inlineStyle = {
    color: "darkblue",
    fontSize: "20px",
    fontWeight: "bold",
    border: "3px solid darkblue"
  };

  return (
    <div className={styles.box} style={inlineStyle}>
      <p>Hello from Box!</p>
    </div>
  );
}

export default Box;