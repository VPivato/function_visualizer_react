import styles from "./FunctionSelector.module.css";

function FunctionSelector() {
  return (
    <div className={styles.selectorWrapper}>
      <label className={styles.label} htmlFor="dropdown">
        Type of function you want to visualize:
      </label>
      <select className={styles.dropdown} id="dropdown">
        <option value="linear">Linear</option>
        <option value="quadratic">Quadratic</option>
        <option value="sin">Sin</option>
      </select>
    </div>
  );
}

export default FunctionSelector;
