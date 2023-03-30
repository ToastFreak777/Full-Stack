import { useContext } from "react";
// Icons
import { AiFillPlusSquare } from "react-icons/ai";
// Styles
import "./CreateTask.styles.css";
//Context
import { TodoContext } from "../Context";

const CreateTask = () => {
  const { createTask, input, setInput, updateFilter } = useContext(TodoContext);

  return (
    <form>
      <label>
        <input
          type="text"
          name="task"
          placeholder="Enter A Task"
          maxLength={50}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            createTask({ title: input, completed: false });
          }}
        >
          <AiFillPlusSquare className="plus" />
        </button>
      </label>
      <div>
        <select onChange={(e) => updateFilter(e.target.value)}>
          <option value="">All</option>
          <option value="true">Completed</option>
          <option value="false">Ongoing</option>
        </select>
      </div>
    </form>
  );
};
export default CreateTask;
