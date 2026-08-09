import styles from "./SlidersPanel.module.css";

function SlidersPanel(props) {
  return (
    <>
      {props.parameters.map((e) => (
        <div className={styles.sliderWrapper} key={e.id}>
          <label htmlFor={e.id}>{e.label}</label>
          <input type="range" id={e.id} />
        </div>
      ))}
    </>
  );
}

export default SlidersPanel;
