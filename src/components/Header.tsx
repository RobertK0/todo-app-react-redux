import styles from "./Header.module.css";

const Header = function () {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Todo</h1>
    </header>
  );
};

export default Header;
