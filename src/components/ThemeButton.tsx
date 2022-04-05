import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store";
import styles from "./ThemeButton.module.css";
import MoonIcon from "./UI/MoonIcon";
import SunIcon from "./UI/SunIcon";

const ThemeToggle = function () {
  const dispatch = useDispatch();
  //@ts-ignore
  const theme = useSelector((state) => state.ui.theme);

  const toggleHandler = function (event: any) {
    dispatch(uiActions.toggleTheme(event.target.value));
  };
  console.log(theme);

  return (
    <fieldset onChange={toggleHandler}>
      <label className={styles.label}>
        <input
          type="radio"
          name="theme"
          value="dark"
          className={`${styles.radio}`}
          defaultChecked={theme === "dark" ? true : false}
        />
        <SunIcon
          classes={
            theme === "light" ? styles.visible : styles.hidden
          }
        />
      </label>
      <label className={styles.label}>
        <input
          type="radio"
          name="theme"
          value="light"
          className={`${styles.radio}`}
          defaultChecked={theme === "light" ? true : false}
        />
        <MoonIcon
          classes={
            theme === "dark" ? styles.visible : styles.hidden
          }
        />
      </label>
    </fieldset>
  );
};

export default ThemeToggle;
