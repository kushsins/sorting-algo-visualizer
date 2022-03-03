import React, { useContext } from "react";
import "./Graph.css";
import Bars from "../Bars/Bars";
import { VisualizerState } from "../../helpers/StateManagement";

const Graph = () => {
  const { randomArray, swapping, comparing, sorted, groupC } =
    useContext(VisualizerState);

  return (
    <div className="sorter-graph">
      <div className="container">
        {randomArray.map((item, index) => {
          const width = (1 / randomArray.length) * 100;
          const height = item;

          let isSwapping = swapping.includes(index);
          let isComparing = comparing.includes(index);
          let isSorted = sorted.includes(index);
          let isGroupC = groupC.includes(index);

          return (
            <div
              key={index}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "end",
                width: `${width}%`,
              }}
            >
              <Bars
                isGroupC={isGroupC}
                isSwapping={isSwapping}
                isComparing={isComparing}
                isSorted={isSorted}
                style={{
                  height: `${height}%`,
                  width: "100%",
                  margin: "auto 10% 0 10%",
                }}
              ></Bars>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Graph;
