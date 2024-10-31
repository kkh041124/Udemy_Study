import { useState } from "react";
import styles from "./Edit.module.css";
import SideBar from "../component/SideBar";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const navigate = useNavigate();
  const handleDate = (e) => {
    setInputDate(e.target.value);
  };
  const handleTitle = (e) => {
    setInputTitle(e.target.value);
  };
  const saveProject = () => {
    setIsCheck(true);
    navigate(-1);
  };

  return (
    <div className={styles.Edit}>
      <div className={styles.SideBar}>
        <SideBar title={inputTitle} isCheck={isCheck} />
      </div>
      <div className={styles.Edit_wrapper}>
        <div className={styles.button_wraaper}>
          <button>Cancel</button>
          <button onClick={saveProject}>Save</button>
        </div>
        <div className={styles.Data_wrapper}>
          <h2>TITEL</h2>
          <input onChange={handleTitle} type="text" />
          <h2>DESCRIPTION</h2>
          <input type="text" />
          <h2>DUE DATE</h2>
          <input onChange={handleDate} type="date" />
        </div>
      </div>
    </div>
  );
};

export default Edit;
