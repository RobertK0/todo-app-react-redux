import Counter from "./Counter";
import Filter from "./Filter";
import styles from "./Footer.module.css";

const Footer = function () {
  return (
    <div className={styles["action-bar"]}>
      <Counter />
      <Filter/>
    </div>
  );
};

export default Footer;