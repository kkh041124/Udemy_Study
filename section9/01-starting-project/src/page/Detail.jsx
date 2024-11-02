import { useNavigate, useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { useEffect, useState } from "react";

const Detail = ({ tasks, projects, updateTask, deleteTask, deleteProject }) => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));
  const [inputTask, setInputTask] = useState("");
  const navigate = useNavigate();
  const handleTask = (e) => {
    setInputTask(e.target.value);
  };

  const saveTask = () => {
    if (inputTask.trim()) {
      // 빈 입력 방지
      updateTask({
        task: inputTask,
      });
      setInputTask(""); // 입력 후 초기화
    }
  };
  const handleDelete = () => {
    deleteProject(project);
    navigate("/");
  };
  return (
    <div className={styles.Detail}>
      <div className={styles.Data}>
        <div className={styles.Data_wrapper}>
          <h3>{project.title}</h3>
          <p>{project.date}</p>
          <h2>{project.description}</h2>
        </div>
        <div className={styles.Data_btn}>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <hr className={styles.hrStyle} />
      <div className={styles.Task}>
        <div className={styles.Task_wrapper}>
          <h2>Tasks</h2>
          <div className={styles.Inp}>
            <input value={inputTask} onChange={handleTask} type="text" />
            <button onClick={saveTask}>Add Task</button>
          </div>
        </div>
        {tasks.length > 0 && (
          <div className={styles.Task_Data}>
            {tasks.map((task, index) => (
              <div key={index} className={styles.TaskItem}>
                <h2>{task}</h2>
                <button onClick={() => deleteTask(task)}>Clear</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
