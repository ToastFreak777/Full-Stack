import { useContext, useState } from "react";
// Icons
import { FaTrash } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
//Context
import { TodoContext } from "../Context";
// Types
import { Task as TaskType } from "../Context";

type Props = {
  task: TaskType;
};

const Task: React.FC<Props> = ({ task }) => {
  const { updateTask, deleteTask } = useContext(TodoContext);

  return (
    <div className={task.completed ? "wrapper completed" : "wrapper active"}>
      <input
        className="updater"
        type="text"
        value={task.title}
        onChange={(e: any) => updateTask({ ...task, title: e.target.value })}
      />

      <div>
        <button
          className="check square"
          onClick={() => updateTask({ ...task, completed: !task.completed })}
        >
          <AiOutlineCheck />
        </button>
        <button className="delete square" onClick={() => deleteTask(task)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Task;
