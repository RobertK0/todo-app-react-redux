import { useDispatch, useSelector } from "react-redux";
import { taskActions, uiActions } from "../store";
import styles from "./ThemeToggle.module.css";
import MoonIcon from "./UI/MoonIcon";
import SunIcon from "./UI/SunIcon";

const ThemeToggle = function () {
  const dispatch = useDispatch();
  //@ts-ignore
  const theme = useSelector((state) => state.ui.theme);

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
          defaultChecked={theme === "dark" ? true : false}
        />
        <SunIcon />
      </label>
      <label>
        <input
          type="radio"
          name="theme"
          value="light"
          defaultChecked={theme === "light" ? true : false}
        />
        <MoonIcon />
      </label>
    </fieldset>
  );
};

export default ThemeToggle;
