import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../store";
import styles from "./Filter.module.css";

const Filter = function () {
  const dispatch = useDispatch();

  const filterHandler = function (event: any) {
    dispatch(
      taskActions.applyFilter(JSON.parse(event.target.value))
    );
  };
  //TODO I should do these with radio buttons
  return (
    <Fragment>
      <fieldset
        className={styles["filter-container"]}
        onChange={filterHandler}
      >
        <label>
          <input
            type="radio"
            name="filter"
            className={`${styles["filter-selection"]} ${styles["active-filter"]}`}
            value="null"
            defaultChecked
          />
          <span>All</span>
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            className={styles["filter-selection"]}
            value="false"
          />
          <span>Active</span>
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            className={styles["filter-selection"]}
            value="true"
          />
          <span>Completed</span>
        </label>
      </fieldset>
    </Fragment>
  );
};

export default Filter;
