import { useSelector } from "react-redux";
import Todo from "./Todo";
import styles from "./TodoList.module.css";
import { Task } from "../../store";
import { Fragment } from "react";

const TodoList = function () {
  //TODO update this type once I understand how it behaves
  const tasks = useSelector((state: any) => state.tasks);

  return (
    <Fragment>
      {tasks.map((task: Task) => (
        <Todo key={task.id} task={task} />
      ))}
    </Fragment>
  );
};

export default TodoList;
