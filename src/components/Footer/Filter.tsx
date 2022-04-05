import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../store";
import styles from "./Filter.module.css";

const Filter = function () {
  const dispatch = useDispatch();

  const filterHandler = function (event: any) {
    if (event.target.type === "button") {
      dispatch(
        taskActions.applyFilter(
          JSON.parse(event.target.dataset.filter)
        )
      );
    }
  };
  //TODO I should do these with radio buttons
  return (
    <Fragment>
      <div
        className={styles["filter-container"]}
        onClick={filterHandler}
      >
        <button
          type="button"
          className={`${styles["filter-selection"]} ${styles["active-filter"]}`}
          data-filter="null"
        >
          All
        </button>
        <button
          type="button"
          className={styles["filter-selection"]}
          data-filter="false"
        >
          Active
        </button>
        <button
          type="button"
          className={styles["filter-selection"]}
          data-filter="true"
        >
          Completed
        </button>
      </div>
    </Fragment>
  );
};

export default Filter;
