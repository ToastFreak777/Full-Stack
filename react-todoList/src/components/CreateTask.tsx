import { useContext } from "react";
// Icons
import { AiFillPlusSquare } from "react-icons/ai";
// Styles
import "./CreateTask.styles.css";
//Context
import { TodoContext } from "../Context";

const CreateTask = () => {
  const { setTasks, input, setInput } = useContext(TodoContext);

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
            if (input !== "") {
              setTasks((prev) => [
                ...prev,
                {
                  title: input,
                  completed: false,
                },
              ]);
              setInput("");
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
  );
};
export default CreateTask;
