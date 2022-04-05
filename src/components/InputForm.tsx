import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../store";
import styles from "./InputForm.module.css";

const Input = function () {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  //TODO check these :any
  const submitHandler = function (event: any) {
    event.preventDefault();
    dispatch(taskActions.add(input));
    setInput("");
  };

  const inputHandler = function (event: any) {
    setInput(event.target.value);
  };

  return (
    <form
      spellCheck={false}
      className={styles["input-form"]}
      onSubmit={submitHandler}
    >
      <div className={styles.circle}></div>
      <input
        onChange={inputHandler}
        value={input}
        type="text"
        className={styles.input}
        placeholder={"Create a new todo..."}
      />
    </form>
  );
};

export default Input;
