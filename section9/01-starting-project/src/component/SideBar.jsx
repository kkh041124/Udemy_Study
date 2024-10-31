import { useNavigate } from "react-router-dom";
import styles from "./SideBar.module.css";

const SideBar = ({ title, isCheck }) => {
  const navigate = useNavigate();
  const navigatePage = () => {
    navigate("/edit");
  };
  return (
    <div className={styles.SideBar}>
      <h2>YOUR PROJECT</h2>
      <button onClick={navigatePage}>+ Add Project</button>
      <h2>{isCheck && title}</h2>
    </div>
  );
};

export default SideBar;
