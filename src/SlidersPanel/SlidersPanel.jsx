import styles from "./SlidersPanel.module.css";

function SlidersPanel() {
  return (
    <>
      <div className={styles.sliderWrapper}>
        <label htmlFor="1">A: 0.00</label>
        <input type="range" name="i1" id="1" />
      </div>
      <div className={styles.sliderWrapper}>
        <label htmlFor="2">B: 0.00</label>
        <input type="range" name="i2" id="2" />
      </div>
      <div className={styles.sliderWrapper}>
        <label htmlFor="3">C: 0.00</label>
        <input type="range" name="i2" id="2" />
      </div>
    </>
  );
}

export default SlidersPanel;
