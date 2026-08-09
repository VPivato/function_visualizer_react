import FunctionSelector from "./FunctionSelector/FunctionSelector";
import GraphCanvas from "./GraphCanvas/GraphCanvas";
import SlidersPanel from "./SlidersPanel/SlidersPanel";
import Header from "./Header/Header";

import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.left}>
          <GraphCanvas />
        </div>
        <div className={styles.right}>
          <FunctionSelector />
          <SlidersPanel />
        </div>
      </div>
    </main>
  );
}

export default App;
