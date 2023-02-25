import { createContext, ReactNode, useState } from "react";

export const TodoContext = createContext<any>(null);

type Props = {
  children: ReactNode;
};

const fetchTasks = () => {
  const data = localStorage.getItem("todoList");
  return data ? JSON.parse(data) : [];
};

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState(fetchTasks());
  const [input, setInput] = useState("");

  return (
    <TodoContext.Provider value={{ tasks, setTasks, input, setInput }}>
      {children}
    </TodoContext.Provider>
  );
};
