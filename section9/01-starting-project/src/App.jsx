import { useState } from "react";
import Edit from "./page/Edit";
import Home from "./page/Home";
import SideBar from "./component/SideBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import styles from "./App.module.css";
import Detail from "./page/Detail";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isCheck, setIsCheck] = useState(false);
  const [nextId, setNextId] = useState(0);
  const updateProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: nextId }]);
    setIsCheck(true);
    setNextId(nextId + 1);
  };
  const deleteProject = (projectDelete) => {
    const updateProject = projects.filter(
      (project) => project !== projectDelete
    );
    setProjects(updateProject);
  };
  const updateTask = (newTask) => {
    setTasks([...tasks, newTask.task]);
  };

  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <Router>
      <div className={styles.App}>
        <SideBar projects={projects} isCheck={isCheck} />
        <div className={styles.Content}>
          <Routes>
            <Route
              path="/"
              element={<Home projects={projects} isCheck={isCheck} />}
            />
            <Route
              path="/edit"
              element={
                <Edit project={projects} updateProject={updateProject} />
              }
            />
            <Route
              path="/detail/:id"
              element={
                <Detail
                  projects={projects}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                  deleteProject={deleteProject}
                  tasks={tasks}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
