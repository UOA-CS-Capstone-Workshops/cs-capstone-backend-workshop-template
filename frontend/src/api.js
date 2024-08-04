const BASE_URL = "http://localhost:3001";

export const getTodos = async () => {
  return fetch(`${BASE_URL}/api/todos`).then((res) => res.json());
};

export const editTodos = async (id, data) => {
  const res = await fetch(`${BASE_URL}/api/todos/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.status === 204;
};

export const deleteTodos = () => {
  // DELETE
};

export const createTodos = () => {
  // POST
};
