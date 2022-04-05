import styles from "./Header.module.css";
import ThemeToggle from "./ThemeButton";

const Header = function () {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Todo</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
