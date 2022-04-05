import styles from "./Card.module.css";

type Props = {
  children: JSX.Element;
};

const Card = function (props: Props) {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
