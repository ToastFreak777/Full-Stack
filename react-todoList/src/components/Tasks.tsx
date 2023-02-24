import { FaTrash } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";

// Styles
import "./Tasks.styles.css";

type Task = {
  title: string;
  completed: boolean;
};

type Tasks = Task[];

type Props = {
  tasks: Tasks;
  setTasks: React.Dispatch<React.SetStateAction<Tasks>>;
};

const Tasks: React.FC<Props> = ({ tasks, setTasks }) => (
  <div className="tasks">
    {tasks.length > 0 ? (
      tasks.map((task, i) => (
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
                const newTasks = tasks.filter((t) => t.title !== task.title);
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

export default Tasks;
