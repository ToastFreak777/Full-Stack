import { useContext, useEffect, useState } from "react";
// Styles
import "./Tasks.styles.css";
//Context
import { TodoContext } from "../Context";
// Types
import { Task as TaskType } from "../Context";
import Task from "./Task";

const Tasks: React.FC = () => {
  const { tasks, filterOptions } = useContext(TodoContext);
  const [filteredTasks, setfilteredTasks] = useState(tasks.slice());

  // Write to localStorage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (filterOptions !== "") {
      setfilteredTasks(
        tasks.filter(
          (item: TaskType) => String(item.completed) === filterOptions
        )
      );
    } else {
      setfilteredTasks(tasks.slice());
    }
  }, [tasks, filterOptions]);

  return (
    <div className="tasks">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task: TaskType) => (
          <Task task={task} key={task.id} />
        ))
      ) : (
        <h2>No Task...</h2>
      )}
    </div>
  );
};

export default Tasks;
