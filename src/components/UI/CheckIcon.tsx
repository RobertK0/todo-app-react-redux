import styles from "./CheckIcon.module.css";

const CheckIcon = function (props: {
  visible: boolean;
  classes: string;
}) {
  const classes = `${props.classes} ${styles.check} ${
    props.visible ? styles.checked : ""
  }`;

  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="9"
    >
      <path fill="none" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
    </svg>
  );
};
export default CheckIcon;
