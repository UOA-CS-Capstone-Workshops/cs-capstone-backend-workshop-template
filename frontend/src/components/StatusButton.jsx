import dayjs from "dayjs";
import { SuccessButton, WarningButton, DangerButton } from "./ColorButton";

/**
 * A button which changes in color and text depending on the isComplete and dueDate
 * statuses.
 *
 * If isComplete, then display a "success" color, along with the text "Complete".
 *
 * Otherwise, if the current date is past the due date, display a "danger" color, along with
 * the text "Overdue".
 *
 * Otherwise, display a "warning" color, along with the text "Pending".
 */
export default function StatusButton({ isComplete, dueDate, onClick }) {
  const isOverdue = dayjs().isAfter(dueDate);

  const Button = isComplete ? SuccessButton : isOverdue ? DangerButton : WarningButton;

  return (
    <Button onClick={onClick}>{isComplete ? "Complete" : isOverdue ? "Overdue" : "Pending"}</Button>
  );
}
