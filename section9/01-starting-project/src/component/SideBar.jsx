import { useNavigate } from "react-router-dom";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const navigate = useNavigate();
  const navigatePage = () => {
    navigate("/edit");
  };
  return (
    <div className={styles.SideBar}>
      <h2>YOUR PROJECT</h2>
      <button onClick={navigatePage}>+ Add Project</button>
    </div>
  );
};

export default SideBar;
