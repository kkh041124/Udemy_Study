import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = ({ projects, isCheck }) => {
  const navigate = useNavigate();
  const navigatePage = () => {
    navigate("/edit");
  };

  return (
    <div className={styles.Home}>
      <div className={styles.Home_wrapper}>
        <img src="/logo.png" />
        <h2>
          {isCheck && projects.title ? projects.title : "No Project Selected"}
        </h2>
        <p>Select a project or get started with a new one</p>
        <button onClick={navigatePage}>Create new Project</button>
      </div>
    </div>
  );
};

export default Home;
