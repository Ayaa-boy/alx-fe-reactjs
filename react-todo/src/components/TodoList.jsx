import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Write tests", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo.trim(), completed: false },
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <input
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2">
        Add
      </button>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`py-2 px-2 border-b cursor-pointer ${
              todo.completed ? "line-through" : ""
            }`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
            <button
              className="text-red-500 ml-2"
              onClick={(e) => {
                e.stopPropagation(); // prevent toggle when deleting
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
