import { useState } from "react";
import styles from "./Edit.module.css";
import { useNavigate } from "react-router-dom";

const Edit = ({ updateProject }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputDate, setInputDate] = useState("");
  const navigate = useNavigate();

  const handleDate = (e) => setInputDate(e.target.value);
  const handleTitle = (e) => setInputTitle(e.target.value);
  const handleDesc = (e) => setInputDesc(e.target.value);

  const saveProject = () => {
    updateProject({
      title: inputTitle,
      description: inputDesc,
      date: inputDate,
    });
    navigate("/");
  };

  return (
    <div className={styles.Edit}>
      <div className={styles.Edit_wrapper}>
        <div className={styles.button_wrapper}>
          <button onClick={() => navigate("/")}>Cancel</button>
          <button onClick={saveProject}>Save</button>
        </div>
        <div className={styles.Data_wrapper}>
          <h2>TITLE</h2>
          <input value={inputTitle} onChange={handleTitle} type="text" />
          <h2>DESCRIPTION</h2>
          <textarea
            className={styles.Desc}
            value={inputDesc}
            onChange={handleDesc}
            type="text"
          />
          <h2>DUE DATE</h2>
          <input value={inputDate} onChange={handleDate} type="date" />
        </div>
      </div>
    </div>
  );
};

export default Edit;
