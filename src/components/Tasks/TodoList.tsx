import { useSelector } from "react-redux";
import Todo from "./Todo";
import styles from "./TodoList.module.css";
import { Task } from "../../store";
import { Fragment } from "react";

const TodoList = function () {
  //TODO update this type once I understand how it behaves
  const tasks = useSelector((state: any) => state.tasks);
  const filter = useSelector((state: any) => state.filter);
  console.log(filter);

  const filteredTasks = tasks.map((task: Task) => {
    if (filter === null) return <Todo key={task.id} task={task} />;
    if (task.checked === filter)
      return <Todo key={task.id} task={task} />;
  });

  return <Fragment>{filteredTasks}</Fragment>;
};

export default TodoList;
