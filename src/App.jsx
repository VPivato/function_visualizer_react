import FunctionSelector from "./FunctionSelector/FunctionSelector";
import GraphCanvas from "./GraphCanvas/GraphCanvas";
import SlidersPanel from "./SlidersPanel/SlidersPanel";
import Header from "./Header/Header";

import styles from "./App.module.css";
import parameters from "./functions_parameters.json";

import { useState } from "react";

function App() {
  const [functionType, setFunctionType] = useState(Object.keys(parameters)[0]);
  function handleFunctionTypeChange(event) {
    const newFunctionType = event.target.value;

    setFunctionType(newFunctionType);
    setParametersValues(getDefaultParameters(newFunctionType));
  }

  const [parametersValues, setParametersValues] = useState(
    getDefaultParameters(functionType),
  );

  function getDefaultParameters(functionType) {
    return Object.fromEntries(
      parameters[functionType].map((param) => [param.id, param.default]),
    );
  }

  function handleParameterChange(id, value) {
    setParametersValues((current) => ({
      ...current,
      [id]: Number(value),
    }));
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
            handleFunctionTypeChange={handleFunctionTypeChange}
          />
          <SlidersPanel
            parameters={parameters[functionType]}
            parametersValues={parametersValues}
            handleParameterChange={handleParameterChange}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
