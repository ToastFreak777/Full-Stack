// Components
import Tasks from "./components/Tasks";
import CreateTask from "./components/CreateTask";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>View & Create Tasks</h1>
      </div>

      <CreateTask />
      <Tasks />
    </div>
  );
};

export default App;
