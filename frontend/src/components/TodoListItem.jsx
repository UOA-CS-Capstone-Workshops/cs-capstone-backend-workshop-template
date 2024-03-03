import dayjs from "dayjs";
import styles from "./TodoListItem.module.css";
import StatusButton from "./StatusButton";
import DeleteButton from "./DeleteButton";

/**
 * Displays a todo item in a <li>. The todo item's description, due date, and status
 * are displayed. Raises update and delete events when various buttons are clicked.
 */
export default function TodoListItem({ todo, onToggleComplete, onDelete }) {
  return (
    <li className={styles.item}>
      <div>
        <h3>{todo.description}</h3>
        <span className={styles.date}>{dayjs(todo.dueDate).format("dddd MMMM D, YYYY")}</span>
      </div>
      <StatusButton
        isComplete={todo.isComplete}
        dueDate={todo.dueDate}
        onClick={() => onToggleComplete(todo)}
      />
      <DeleteButton onClick={() => onDelete(todo)} />
    </li>
  );
}
