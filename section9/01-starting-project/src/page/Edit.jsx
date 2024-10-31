import styles from "./Edit.module.css";

const Edit = () => {
  return (
    <div className={styles.Edit}>
      <div className={styles.Edit_wrapper}>
        <div className={styles.button_wraaper}>
          <button>Cancel</button>
          <button>Save</button>
        </div>
        <div className={styles.Data_wrapper}>
          <h2>TITEL</h2>
          <input type="text" />
          <h2>DESVRIPTION</h2>
          <input type="text" />
          <h2>DUE DATE</h2>
          <input type="date" />
        </div>
      </div>
    </div>
  );
};

export default Edit;
