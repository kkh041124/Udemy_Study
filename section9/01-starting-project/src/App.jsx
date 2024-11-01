import { useState } from "react";
import Edit from "./page/Edit";
import Home from "./page/Home";
import SideBar from "./component/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Detail from "./page/Detail";
function App() {
  const [projects, setProjects] = useState([]);
  const [isCheck, setIsCheck] = useState(false);
  const [nextId, setNextId] = useState(0);
  const updateProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: nextId }]);
    setIsCheck(true);
    setNextId(nextId + 1);
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
            <Route path="/detail/:id" element={<Detail project={projects} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
