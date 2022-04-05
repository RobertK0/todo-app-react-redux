import { useDispatch } from "react-redux";
import { taskActions } from "../../store";
import styles from "./ClearBtn.module.css";

const ClearBtn = function () {
  const dispatch = useDispatch();

  const clearHandler = function () {
    dispatch(taskActions.clearCompleted());
  };

  return <button onClick={clearHandler}>Clear Completed</button>;
};

export default ClearBtn;
