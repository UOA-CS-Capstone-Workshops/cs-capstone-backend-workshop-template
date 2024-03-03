import { useState } from "react";
import styles from "./AddTodoForm.module.css";
import dayjs from "dayjs";
import { DangerButton, PrimaryButton } from "./ColorButton";
import Input from "./Input";

/**
 * A form allowing users to enter a description and dueDate. On submission,
 * raises the onSubmit event with the given description and dueDate.
 */
export default function AddTodoForm({ onSubmit, onCancel }) {
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(dayjs().format("YYYY-MM-DD"));

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(description, dueDate);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="description">Description</label>
      <Input
        id="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="What do you need to do?"
        required
      />
      <label htmlFor="due-date">Due date</label>
      <Input
        id="due-date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <div>
        <PrimaryButton type="submit">Add</PrimaryButton>
        <DangerButton onClick={onCancel}>Cancel</DangerButton>
      </div>
    </form>
  );
}
