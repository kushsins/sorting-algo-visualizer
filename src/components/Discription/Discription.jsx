import React, { useEffect, useContext, useState } from "react";
import "./Discription.css";
import "antd/dist/antd.css";
import AlgoDiscription from "../../helpers/AlgoDiscription";
import { AlgoState } from "../../helpers/StateManagement";

const Discription = () => {
  const { currentAlgo, theme } = useContext(AlgoState);
  const [algo, setAlgo] = useState(AlgoDiscription.bubbleSort);
  const [className, setClassName] = useState();

  useEffect(() => {
    if (theme === "dark") {
      setClassName("table-heading-dark");
    } else {
      setClassName("table-heading");
    }
  }, [theme]);

  useEffect(() => {
    switch (currentAlgo) {
      case "BubbleSort":
        setAlgo(AlgoDiscription.bubbleSort);
        break;
      case "HeapSort":
        setAlgo(AlgoDiscription.heapSort);
        break;
      case "InsertionSort":
        setAlgo(AlgoDiscription.insertionSort);
        break;

      case "MergeSort":
        setAlgo(AlgoDiscription.mergeSort);
        break;
      case "QuickSort":
        setAlgo(AlgoDiscription.quickSort);
        break;
      case "SelectionSort":
        setAlgo(AlgoDiscription.selectionSort);
        break;
      case "ShellSort":
        setAlgo(AlgoDiscription.shellSort);
        break;
      default:
        break;
    }
  }, [currentAlgo]);

  return (
    <section className="discription">
      <div className="heading"> {algo.heading} </div>

      <div className="dis-text">{algo.dis}</div>

      <table className="dis-table">
        <tr className={`table-heading-size ${className}`}>Time Complexity</tr>
        <tr>
          <td>Best</td>
          <td>{algo.best}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{algo.average}</td>
        </tr>
        <tr>
          <td>Worst</td>
          <td>{algo.worst}</td>
        </tr>
        <tr className={`table-heading-size ${className}`}>
          Space Complexity
          <td className="space">{algo.space}</td>
        </tr>
      </table>
    </section>
  );
};

export default Discription;
