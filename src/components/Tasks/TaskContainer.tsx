import styles from "./TaskContainer.module.css";
import TodoList from "./TodoList";

const TaskContainer = function () {
  return (
    <div className={styles["todo-container"]}>
      <TodoList />
    </div>
  );
};

export default TaskContainer;
