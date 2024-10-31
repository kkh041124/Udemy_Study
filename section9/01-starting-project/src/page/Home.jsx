import { useNavigate } from "react-router-dom";
import SideBar from "../component/SideBar";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const navigatePage = () => {
    navigate("/edit");
  };

  return (
    <div className={styles.Home}>
      <div className={styles.SideBar}>
        <SideBar />
      </div>
      <div className={styles.Home_wrapper}>
        <img src="/logo.png" />
        <h2>No Project Selected</h2>
        <p>Select a project or get started with a new one</p>
        <button onClick={navigatePage}>Create new Project</button>
      </div>
    </div>
  );
};

export default Home;
