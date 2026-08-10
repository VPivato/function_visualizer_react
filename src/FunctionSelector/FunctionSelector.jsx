import styles from "./FunctionSelector.module.css";

function FunctionSelector(props) {
  return (
    <div className={styles.selectorWrapper}>
      <label className={styles.label} htmlFor="dropdown">
        Type of function you want to visualize:
      </label>
      <select
        className={styles.dropdown}
        id="dropdown"
        value={props.value}
        onChange={props.handleFunctionTypeChange}
      >
        {props.options.map((e) => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FunctionSelector;
