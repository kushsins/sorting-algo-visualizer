import React, { useState } from "react";
import "./App.css";
import { AlgoState } from "./helpers/StateManagement";
import Discription from "./components/Discription/Discription";
import Sorter from "./components/Sorter/Sorter";

const App = () => {
  let [theme, setTheme] = useState("light");
  const [currentAlgo, setCurrentAlgo] = useState("BubbleSort");

  const onAlgoChange = (val) => {
    setCurrentAlgo(val);
  };

  return (
    <div className={`app direction ${theme}`}>
      <AlgoState.Provider
        value={{ currentAlgo, theme, onAlgoChange, setTheme }}
      >
        <Discription />
        <Sorter />
      </AlgoState.Provider>
    </div>
  );
};

export default App;
