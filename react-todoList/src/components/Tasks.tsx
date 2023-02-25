import { useContext, useEffect } from "react";
// Icons
import { FaTrash } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
// Styles
import "./Tasks.styles.css";
//Context
import { TodoContext } from "../Context";
// Types
export type Task = {
  title: string;
  completed: boolean;
};

export type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const Tasks: React.FC = () => {
  const { tasks, setTasks } = useContext(TodoContext);

  // Write to localStorage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="tasks">
      {tasks.length > 0 ? (
        tasks.map((task: Task, i: number) => (
          <div
            className={task.completed ? "wrapper completed" : "wrapper active"}
            key={i}
          >
            <p className="title">{task.title}</p>
            <div>
              <button
                className="check square"
                onClick={() => {
                  task.completed = !task.completed;
                  setTasks([...tasks]);
                }}
              >
                <AiOutlineCheck />
              </button>
              <button
                className="delete square"
                onClick={() => {
                  const newTasks = tasks.filter(
                    (t: Task) => t.title !== task.title
                  );
                  setTasks(newTasks);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      ) : (
        <h2>No Task...</h2>
      )}
    </div>
  );
};

export default Tasks;
