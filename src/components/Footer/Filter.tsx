import { useDispatch } from "react-redux";
import { taskActions } from "../../store";
import styles from "./Filter.module.css";

const Filter = function (props: any) {
  const dispatch = useDispatch();

  const filterHandler = function (event: any) {
    dispatch(
      taskActions.applyFilter(JSON.parse(event.target.value))
    );
  };
  //TODO I should do these with radio buttons
  return (
    <div className={props.classes}>
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
    </div>
  );
};

export default Filter;
