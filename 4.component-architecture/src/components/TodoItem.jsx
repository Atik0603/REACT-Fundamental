import styles from "../styles/TodoItem.module.css";

function TodoItem({ task, onRemove, onToggle }) {
  return (
    <div className={styles.item}>
      <span
        className={task.completed ? styles.completed : styles.text}
        onClick={onToggle}
      >
        {task.text}
      </span>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default TodoItem;