import styles from "./SlidersPanel.module.css";

function SlidersPanel(props) {
  return (
    <>
      {props.parameters.map((e) => (
        <div className={styles.sliderWrapper} key={e.id}>
          <label htmlFor={e.id}>
            {e.label}: {props.parametersValues[e.id]}
          </label>
          <input
            type="range"
            id={e.id}
            min={e.min}
            max={e.max}
            step={e.step}
            value={props.parametersValues[e.id]}
            onChange={(event) =>
              props.handleParameterChange(e.id, event.target.value)
            }
          />
        </div>
      ))}
    </>
  );
}

export default SlidersPanel;
