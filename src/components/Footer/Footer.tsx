import ClearBtn from "./ClearBtn";
import Counter from "./Counter";
import Filter from "./Filter";
import styles from "./Footer.module.css";

const Footer = function () {
  return (
    <div className={styles["action-bar"]}>
      <Counter classes={styles.counter} />
      <Filter classes={styles.filter} />
      <ClearBtn classes={styles.clear} />
    </div>
  );
};

export default Footer;
