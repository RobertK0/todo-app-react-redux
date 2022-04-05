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
      <fieldset
        className={styles["filter-container"]}
        onClick={filterHandler}
      >
        <label>
          <input
            type="radio"
            className={`${styles["filter-selection"]} ${styles["active-filter"]}`}
            data-filter="null"
          />
          <span>All</span>
        </label>
        <input
          type="radio"
          className={styles["filter-selection"]}
          data-filter="false"
        />
        <span>Active</span>

        <input
          type="radio"
          className={styles["filter-selection"]}
          data-filter="true"
        />
        <span>Completed</span>
      </fieldset>
    </Fragment>
  );
};

export default Filter;
