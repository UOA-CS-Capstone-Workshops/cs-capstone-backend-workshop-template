import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css";

/**
 * Displays the given todo items in an <ul>. Propagates update / delete events
 * from the individual items.
 */
export default function TodoList({ todos, onToggleComplete, onDelete }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
