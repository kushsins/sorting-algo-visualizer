import React, { useState, useContext, useEffect } from "react";
import "./Controls.css";
import "antd/dist/antd.css";
import { Slider, Select } from "antd";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { MdReplay } from "react-icons/md";
import { AlgoState, VisualizerState } from "../../helpers/StateManagement";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const Controls = () => {
  const {
    isDisabled,
    sorting,
    onSpeedChange,
    onInputSizeChanged,
    reset,
    handleSorting,
    sliderVal,
  } = useContext(VisualizerState);
  const { onAlgoChange, theme, setTheme } = useContext(AlgoState);
  const [className, setClassName] = useState();
  const { Option } = Select;

  useEffect(() => {
    if (theme === "dark") {
      setClassName("mode-btn-dark");
    } else {
      setClassName("mode-btn-light");
    }
  }, [theme]);

  return (
    <div className="sorter-controls">
      <div className="icon-container">
        <div className="icons">
          <div className="btn-container">
            <div
              className={`mode-btn mode-btn-size ${className}`}
              onClick={reset}
            >
              <MdReplay className="icon" />
            </div>
          </div>
          <div className="btn-container">
            <div
              className={`mode-btn mode-btn-size ${className}`}
              onClick={handleSorting}
              isDisabled={true}
            >
              {sorting === "started" ? (
                <IoPauseOutline className="icon" />
              ) : (
                <IoPlayOutline className="icon" />
              )}
            </div>
          </div>
          <div
            className="btn-container"
            onClick={() => {
              if (theme === "light") {
                setTheme("dark");
              } else {
                setTheme("light");
              }
            }}
          >
            <div className={`mode-btn mode-btn-size ${className}`}>
              {theme === "dark" ? (
                <RiSunLine className="icon" />
              ) : (
                <RiMoonClearLine className="icon" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="controls-container">
        <div className="input-controls">
          <div className="control-heading">Array Size</div>
          <div className="slider-container">
            <Slider
              className="slider"
              defaultValue={30}
              min={20}
              max={100}
              step={2}
              onChange={onInputSizeChanged}
              disabled={isDisabled}
              handleStyle={{ borderColor: "#31d9d9" }}
              trackStyle={{ background: "#31d9d9" }}
            />
          </div>
        </div>
        <div className="input-controls">
          <div className="control-heading">Speed</div>
          <div className="slider-container">
            <Slider
              className="slider"
              value={sliderVal}
              min={1}
              max={10}
              step={1}
              onChange={onSpeedChange}
              handleStyle={{ borderColor: "#31d9d9" }}
              trackStyle={{ background: "#31d9d9" }}
            />
          </div>
        </div>
        <div className="input-controls">
          <div className="control-heading">Algorithm</div>
          <Select
            size="large"
            allowClear={true}
            defaultValue="BubbleSort"
            className="slider-container"
            placeholder="Select a option and change input text above"
            disabled={isDisabled}
            onChange={onAlgoChange}
            allowClear
          >
            <Option value="BubbleSort">Bubble Sort</Option>
            <Option value="HeapSort">Heap Sort</Option>
            <Option value="InsertionSort">Insertion Sort</Option>
            <Option value="MergeSort">Merge Sort</Option>
            <Option value="QuickSort">Quick Sort</Option>
            <Option value="SelectionSort">Selection Sort</Option>
            <Option value="ShellSort">Shell Sort</Option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Controls;
