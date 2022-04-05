import { useDispatch } from "react-redux";
import { taskActions, uiActions } from "../store";
import styles from "./ThemeToggle.module.css";
import MoonIcon from "./UI/MoonIcon";
import SunIcon from "./UI/SunIcon";

const ThemeToggle = function () {
  const dispatch = useDispatch();

  const toggleHandler = function (event: any) {
    dispatch(uiActions.toggleTheme(event.target.value));
  };

  return (
    <fieldset onChange={toggleHandler}>
      <label>
        <input
          type="radio"
          name="theme"
          value="dark"
          defaultChecked
        />
        <SunIcon />
      </label>
      <label>
        <input type="radio" name="theme" value="light" />
        <MoonIcon />
      </label>
    </fieldset>
  );
};

export default ThemeToggle;
