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
    //Prevents radio button default behavior, instead toggles theme on every click, as usually the unchecked radio button is hidden and it messes with the accessibility
    event.preventDefault();
    dispatch(uiActions.toggleTheme());
  };
  console.log(theme);

  return (
    <fieldset onClick={toggleHandler}>
      <label className={styles.label}>
        <input
          type="radio"
          name="theme"
          value="dark"
          className={`${styles.radio}`}
          defaultChecked={theme === "dark" ? true : false}
        />
        <SunIcon
          classes={` ${
            theme === "dark" ? styles.visible : styles.hidden
          } ${styles.icon}`}
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
          classes={`${
            theme === "light" ? styles.visible : styles.hidden
          } ${styles.icon}`}
        />
      </label>
    </fieldset>
  );
};

export default ThemeToggle;
