import { useNavigate } from "react-router-dom";
import styles from "../App.module.css"; // App.module.css를 불러옴

const SideBar = ({ projects }) => {
  const navigate = useNavigate();
  const navigatePage = () => {
    navigate("/edit");
  };
  const navigateDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className={styles.SideBar}>
      <div className={styles.SideBar_wrapper}>
        <h2>YOUR PROJECT</h2>
        <button onClick={navigatePage}>+ Add Project</button>

        <ul>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div className={styles.SideBar_title}>
                <button
                  key={project.id}
                  id={project.id}
                  onClick={() => navigateDetail(project.id)}
                >
                  <li className={styles.ProjectItem}>
                    {project.title || "Untitled Project"}
                  </li>
                </button>
              </div>
            ))
          ) : (
            <p>No Project Available</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
