import { getDatabase } from "./database.js";

/**
 * @typedef {object} Todo
 * @property {number} id
 * @property {string} description
 * @property {boolean} isComplete
 * @property {string} dueDate
 */

/**
 * Gets all todo items.
 *
 * @returns an array of all todos.
 */
export async function retrieveTodos() {
  const db = await getDatabase();

  /** @type {Todo[]} */
  const todos = await db.all("SELECT * FROM Todos");
  return todos.map((t) => intToBool(t));
}

/**
 * Updates the isComplete status of the todo with the corresponding id.
 * Returns a value indicating whether an update was made.
 *
 * @param {number} id the id of the todo to update.
 * @param {boolean} isComplete the new completed status of the todo
 * @return true if the status was updated, false otherwise.
 */
export async function updateCompleteStatus(id, isComplete) {
  const db = await getDatabase();

  const response = await db.run("UPDATE Todos SET isComplete = ? WHERE id = ?", isComplete, id);

  // response.changes is the number of rows affected by the above statement.
  return response.changes > 0;
}

/**
 * Creates a new todo.
 *
 * @param {string} description the new description
 * @param {string} dueDate the new due date
 *
 * @return the newly created todo
 */
export async function createTodo(description, dueDate) {
  const db = await getDatabase();

  const response = await db.run(
    "INSERT INTO Todos(description, dueDate, isComplete) VALUES(?, ?, ?)",
    description,
    dueDate,
    false
  );

  /** @type {Todo} */
  const todo = await db.get("SELECT * FROM Todos WHERE id = ?", response.lastID); // lastID is the auto-generated PK value.
  return intToBool(todo);
}

/**
 * Deletes the todo with the given id
 *
 * @param {number} id the id of the todo to delete
 */
export async function deleteTodo(id) {
  const db = await getDatabase();
  await db.run("DELETE FROM Todos WHERE id = ?", id);
}

/**
 * A helper function to get around the fact that SQLite stores booleans as numbers...
 *
 * @param {Todo} todo
 * @returns the todo with the isComplete status definitely a boolean
 */
const intToBool = (todo) => ({ ...todo, isComplete: !!todo.isComplete });
