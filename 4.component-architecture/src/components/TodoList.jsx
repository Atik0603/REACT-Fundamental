import TodoItem from "./TodoItem";

function TodoList({ tasks, onRemove, onToggle }) {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onRemove={() => onRemove(task.id)}
          onToggle={() => onToggle(task.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;