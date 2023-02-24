import { useState } from "react";

// Icons
import { AiFillPlusSquare } from "react-icons/ai";

// Components
import Tasks from "./components/Tasks";

import "./App.css";

const dummyData = [
  {
    title: "HTML",
    completed: true,
  },
  {
    title: "CSS",
    completed: false,
  },
  {
    title: "JavaScript",
    completed: false,
  },
  {
    title: "Angular",
    completed: true,
  },
  {
    title: "Node.Js",
    completed: false,
  },
  {
    title: "React.js",
    completed: true,
  },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(dummyData);
  const [input, setinput] = useState("");

  return (
    <div className="container">
      <div className="title">
        <h1>View & Create Tasks</h1>
      </div>

      <form>
        <label>
          <input
            type="text"
            name="task"
            placeholder="Enter A Task"
            maxLength={50}
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (input !== "") {
                setTasks((prev) => [
                  ...prev,
                  {
                    title: input,
                    completed: false,
                  },
                ]);
                setinput("");
              }
            }}
          >
            <AiFillPlusSquare className="plus" />
          </button>
        </label>
        <div>
          <select>
            <option>All</option>
            <option>Completed</option>
            <option>Ongoing</option>
          </select>
        </div>
      </form>

      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
