import { useState } from "react";
import Edit from "./page/Edit";
import Home from "./page/Home";
import SideBar from "./component/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
function App() {
  const [projects, setProjects] = useState([]);
  const [isCheck, setIsCheck] = useState(false);

  const updateProject = (newProject) => {
    setProjects([...projects, newProject]);
    setIsCheck(true);
  };

  return (
    <Router>
      <div className={styles.App}>
        <SideBar projects={projects} isCheck={isCheck} />
        <div className={styles.Content}>
          <Routes>
            <Route
              path="/"
              element={<Home project={projects} isCheck={isCheck} />}
            />
            <Route
              path="/edit"
              element={
                <Edit project={projects} updateProject={updateProject} />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
