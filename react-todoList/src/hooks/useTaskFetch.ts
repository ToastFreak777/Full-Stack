import { useContext, useEffect } from "react";

// Context
import { TodoContext } from "../Context";
// Helpers
import { isPersistedState } from "../utils";

export const useTaskFetch = (taskStatus: string) => {
  const { tasks, setTasks } = useContext(TodoContext);

  // Initial Render
  useEffect(() => {
    const fetchedTasks = isPersistedState("todoTasks");

    if (fetchedTasks) {
      console.info("Grabbing tasks from localStorage");
      setTasks(fetchedTasks);
      return;
    }
  }, []);

  // Write to localStorage
  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);
};
