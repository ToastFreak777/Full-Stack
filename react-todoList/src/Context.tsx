import { createContext, ReactNode, useState } from "react";

export const TodoContext = createContext<any>(null);

type Props = {
  children: ReactNode;
};

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const fetchTasks = (): Task[] => {
  const data = localStorage.getItem("todoList");
  return data ? JSON.parse(data) : [];
};

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState(fetchTasks());
  const [input, setInput] = useState("");
  const [filterOptions, setFilterOptions] = useState("");

  const createTask = (task: Task) => {
    if (input === "") return;

    setTasks((prev) => [...prev, { ...task, id: prev.length }]);
    setInput("");
  };

  const deleteTask = (task: Task) => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== task.id));
  };

  const updateTask = (task: Task) => {
    const newTasks = tasks.map((item) => {
      if (item.id !== task.id) return item;

      return { ...task };
    });
    setTasks(newTasks);
  };

  const updateFilter = (option: string) => setFilterOptions(option);

  return (
    <TodoContext.Provider
      value={{
        tasks,
        createTask,
        input,
        setInput,
        updateTask,
        deleteTask,
        filterOptions,
        updateFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
