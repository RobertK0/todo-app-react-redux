import CheckIcon from "../UI/CheckIcon";
import CrossIcon from "../UI/CrossIcon";
import styles from "./Todo.module.css";
import { Task, taskActions } from "../../store";
import { useDispatch } from "react-redux";

const Todo = function (props: { task: Task }) {
  const dispatch = useDispatch();

  const removeHandler = function () {
    dispatch(taskActions.remove(props.task.id));
  };

  const checkHandler = function () {
    dispatch(taskActions.toggleCheck(props.task.id));
    console.log("yay");
  };

  return (
    <li className={styles.task}>
      <fieldset>
        <label onChange={checkHandler}>
          <input type="checkbox" className={styles.checkbox} />

          <CheckIcon visible={props.task.checked ? true : false} />

          <span
            className={props.task.checked ? styles.checked : ""}
          >
            {props.task.text}
          </span>
        </label>
        <label className={styles.remove}>
          <button onClick={removeHandler}>
            <CrossIcon />
          </button>
        </label>
      </fieldset>
    </li>
  );
};

export default Todo;
