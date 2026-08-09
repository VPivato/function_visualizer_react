import FunctionSelector from "./FunctionSelector/FunctionSelector";
import GraphCanvas from "./GraphCanvas/GraphCanvas";
import SlidersPanel from "./SlidersPanel/SlidersPanel";
import Header from "./Header/Header";

import styles from "./App.module.css";
import parameters from "./functions_parameters.json";

import { useState } from "react";

function App() {
  const [functionType, setFunctionType] = useState(Object.keys(parameters)[0]);
  function onChange(event) {
    setFunctionType(event.target.value);
  }

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.left}>
          <GraphCanvas />
        </div>
        <div className={styles.right}>
          <FunctionSelector
            options={Object.keys(parameters)}
            value={functionType}
            onChange={onChange}
          />
          <SlidersPanel parameters={parameters[functionType]} />
        </div>
      </div>
    </main>
  );
}

export default App;
