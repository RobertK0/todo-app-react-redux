import Counter from "./Counter";
import styles from "./Footer.module.css";

const Footer = function () {
  return (
    <div className={styles["action-bar"]}>
      <Counter />
    </div>
  );
};

export default Footer;
