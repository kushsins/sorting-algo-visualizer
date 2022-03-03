import React, { useRef, useState, useContext } from "react";
import "./Sorter.css";
import { VisualizerState, AlgoState } from "../../helpers/StateManagement";
import { generateRandomArray } from "../../helpers/Functions";
import BubbleSort from "../../helpers/Algorithm/BubbleSort";
import HeapSort from "../../helpers/Algorithm/HeapSort";
import InsertionSort from "../../helpers/Algorithm/InsertionSort";
import MergeSort from "../../helpers/Algorithm/MergeSort";
import QuickSort from "../../helpers/Algorithm/QuickSort";
import SelectionSort from "../../helpers/Algorithm/SelectionSort";
import ShellSort from "../../helpers/Algorithm/ShellSort";

import Graph from "../Graph/Graph";
import Controls from "../Controls/Controls";

const Sorter = () => {
  const arraySize = 30;

  //Random Array

  const [randomArray, setRandomArray] = useState(
    generateRandomArray({ arraySize: arraySize })
  );

  const visualizationSteps = useRef([]);
  const traceStep = useRef(-1);
  const playBackSpeed = useRef(200);
  const [sliderVal, setSliderVal] = useState(5);
  const [isDisabled, setIsDisabled] = useState(false);
  const [comparing, setComparing] = useState([]);
  const [swapping, setSwapping] = useState([]);
  const [groupC, setGroupC] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [timeOuts, setTimeOuts] = useState([]);

  const [sorting, setSorting] = useState("ready");
  const { currentAlgo } = useContext(AlgoState);

  // Functions
  const onInputSizeChanged = (val) => {
    const nextRandomizedArray = generateRandomArray({ arraySize: val });
    setRandomArray(nextRandomizedArray);
  };

  const onSpeedChange = (val) => {
    pause();
    setSliderVal(val);
    const newPlayBackSpeed = 1000 / val;
    playBackSpeed.current = newPlayBackSpeed;
    if (sorting === "started") {
      play();
    }
  };

  const initVisualization = () => {
    const array = [...randomArray];
    switch (currentAlgo) {
      case "BubbleSort":
        visualizationSteps.current = BubbleSort(array);
        break;
      case "HeapSort":
        visualizationSteps.current = HeapSort(array);
        break;
      case "MergeSort":
        visualizationSteps.current = MergeSort(array);
        break;
      case "InsertionSort":
        visualizationSteps.current = InsertionSort(array);
        break;
      case "QuickSort":
        visualizationSteps.current = QuickSort(array);
        break;
      case "SelectionSort":
        visualizationSteps.current = SelectionSort(array);
        break;
      case "ShellSort":
        visualizationSteps.current = ShellSort(array);
        break;
      default:
    }
  };

  //Controls

  const start = (visualizationSteps) => {
    const timeOuts = [];

    visualizationSteps.forEach((item, i) => {
      let timeOut = setTimeout(
        (item) => {
          traceStep.current = traceStep.current + 1;
          changeVisualState(item);
        },
        i * playBackSpeed.current,
        item
      );

      timeOuts.push(timeOut);
    });

    let timeOut = setTimeout(() => {
      timeOuts.forEach((timeOut) => clearTimeout(timeOut));
      setSorted([]);
      setTimeOuts([]);
      setSorting("finished");
    }, visualizationSteps.length * playBackSpeed.current);
    timeOuts.push(timeOut);
    setTimeOuts(timeOuts);
  };

  const pause = () => {
    timeOuts.forEach((timeOut) => clearTimeout(timeOut));
    setTimeOuts([]);
  };

  const play = () => {
    const nextStep = visualizationSteps.current.slice(traceStep.current);
    start(nextStep);
  };

  const reset = () => {
    pause();
    const nextRandomizedArray = generateRandomArray({
      arraySize: randomArray.length,
    });
    setSorting("ready");
    setRandomArray(nextRandomizedArray);
    setComparing([]);
    setSwapping([]);
    setGroupC([]);
    setSorted([]);
    setIsDisabled(false);
    traceStep.current = -1;
    visualizationSteps.current = [];
  };

  const changeVisualState = (visualState) => {
    setRandomArray(visualState.array);
    setComparing(visualState.comparing);
    setSwapping(visualState.swapping);
    setGroupC(visualState.groupC);
    setSorted(visualState.sorted);
  };

  const handleSorting = () => {
    switch (sorting) {
      case "ready":
        setSorting("started");
        setIsDisabled(true);
        initVisualization();
        start(visualizationSteps.current);
        break;
      case "started":
        setSorting("paused");
        pause();
        break;
      case "paused":
        setSorting("started");
        play();
        break;
      case "finished":
        alert("Array already sorted! Please refresh");
        break;
      default:
    }
  };

  return (
    <div className="sorter">
      <VisualizerState.Provider
        value={{
          randomArray,
          swapping,
          comparing,
          sorted,
          groupC,
          sorting,
          sliderVal,
          isDisabled,
          handleSorting,
          onInputSizeChanged,
          onSpeedChange,
          reset,
        }}
      >
        <Graph />
        <Controls />
      </VisualizerState.Provider>
    </div>
  );
};

export default Sorter;
