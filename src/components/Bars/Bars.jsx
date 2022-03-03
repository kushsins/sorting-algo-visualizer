import React from "react";
import "./Bars.css";

const Bars = ({ style, isSwapping, isComparing, isSorted, isGroupC }) => {
  let className = "bar";
  if (isSorted) className += " green";
  if (isSwapping) className += " red";
  else if (isComparing) className += " yellow";
  else if (isGroupC) className += " purple";

  return <div style={{ ...style }} className={className}></div>;
};

export default Bars;
