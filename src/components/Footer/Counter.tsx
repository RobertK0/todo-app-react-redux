import { useSelector } from "react-redux";
import { Task } from "../../store";
// import styles from "./Counter.module.css";

const Counter = function (props: any) {
  //TODO :any
  const tasks = useSelector((state: any) => state.tasks.tasks);

  const unchecked = tasks.reduce((acc: number, task: Task) => {
    return task.checked ? acc : acc + 1;
  }, 0);

  return (
    <span className={props.classes}>{unchecked} items left</span>
  );
};

export default Counter;
