
import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";


function TodoList() {
  const {
    tasks,
    newTask,
    handleInputChange,
    handleAddTask,
    handleCompleteTask,
    handleRemoveTask,
  } = useContext(TodoContext);

  return (
    <div className="border border-black-500 p-4" style={{
      background: 'url(https://media.istockphoto.com/id/911633218/vector/abstract-geometric-medical-cross-shape-medicine-and-science-concept-background.jpg?s=612x612&w=0&k=20&c=eYz8qm5xa5wbWCWKgjOpTamavekYv8XqPTA0MC4tHGA=) center/cover',
    }}>
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Add a new task here"
        className="border border-gray-300 rounded-md px-3 py-2 mb-2"
      />
    <button
  onClick={handleAddTask}
  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-red-500"
>
  Add Task
</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompleteTask(task.id)}
              className="mr-2"
            />
            <span className={`text-lg ${task.completed ? "line-through" : ""}`}>
              {task.text}
            </span>
            <button
              onClick={() => handleRemoveTask(task.id)}
              className="ml-auto bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        Total Tasks: {tasks.length} | Completed Tasks:{" "}
        {tasks.filter((task) => task.completed).length}
      </div>
    </div>
  );
}

export default TodoList;
