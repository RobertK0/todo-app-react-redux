import { useSelector } from "react-redux";
import Todo from "./Todo";
// import styles from "./TodoList.module.css";
import { Task } from "../../store";
import { Fragment } from "react";

const TodoList = function () {
  //TODO update this type once I understand how it behaves
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const filter = useSelector((state: any) => state.tasks.filter);
  const filteredTasks = tasks.filter((task: Task) => {
    if (filter === null) return true;
    return task.checked === filter;
  });
  const taskElements = filteredTasks.map((task: Task) => (
    <Todo key={task.id} task={task} />
  ));

  return <Fragment>{taskElements}</Fragment>;
};

export default TodoList;
