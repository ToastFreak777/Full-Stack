import { createContext, ReactNode, useState } from "react";

import { dummyData } from "./data";

export const TodoContext = createContext<any>(null);

// Types
import { Task } from "./components/Tasks";

type Props = {
  children: ReactNode;
};

// type states = {
//   tasks: Task[];
//   setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
//   input: string;
//   setInput: React.Dispatch<React.SetStateAction<string>>;
// };

export const ContextProvider: React.FC<Props> = ({ children }) => {
  // const [tasks, setTasks] = useState(dummyData);
  const [tasks, setTasks] = useState();
  const [input, setInput] = useState("");

  return (
    <TodoContext.Provider value={{ tasks, setTasks, input, setInput }}>
      {children}
    </TodoContext.Provider>
  );
};
