import Footer from "../Footer/Footer";
import styles from "./TaskContainer.module.css";
import TodoList from "./TodoList";

const TaskContainer = function () {
  return (
    <div className={styles["todo-container"]}>
      <ul>
        <TodoList />
      </ul>
      <Footer />
    </div>
  );
};

export default TaskContainer;
