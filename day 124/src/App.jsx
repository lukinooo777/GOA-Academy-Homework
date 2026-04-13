import { useState } from "react";

function App() {
  // state სადაც ვინახავთ დავალებებს
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // დავალების დამატება
  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([...tasks, input]);
    setInput("");
  };

  // წაშლა
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-5">To-Do List</h1>

      {/* input */}
      <div className="flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Enter task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 rounded text-black"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* task list */}
      <ul className="w-full max-w-md">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="bg-gray-800 p-3 mb-2 flex justify-between rounded"
          >
            {task}
            <button
              onClick={() => deleteTask(index)}
              className="text-red-400"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;