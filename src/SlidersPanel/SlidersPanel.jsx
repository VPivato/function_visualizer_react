import styles from "./SlidersPanel.module.css";
import parameters from "../functions_parameters.json";

function SlidersPanel() {
  return (
    <>
      {parameters.Linear.map((e) => (
        <div className={styles.sliderWrapper}>
          <label htmlFor={e.id} key={e.id}>
            {e.label}
          </label>
          <input type="range" id={e.id} />
        </div>
      ))}
    </>
  );
}

export default SlidersPanel;
