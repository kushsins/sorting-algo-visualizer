import { newStep, addStep } from "../Functions";

const InsertionSort = (array) => {
  const visualizationSteps = newStep(array);

  // Core Algorithm
  for (let i = 1; i < array.length; i++) {
    let value = array[i];
    let hole = i;

    addStep(visualizationSteps, array, [], [i]);
    while (hole > 0 && array[hole - 1] > value) {
      addStep(visualizationSteps, array, [], [hole], [hole - 1]);
      array[hole] = array[hole - 1];
      hole -= 1;

      addStep(visualizationSteps, array, [], [], [hole, hole + 1]);
    }

    addStep(visualizationSteps, array, [], [], [], [hole]);
    array[hole] = value;

    addStep(visualizationSteps, array, [], [], [], [hole]);
  }

  addStep(visualizationSteps, array, [...Array(array.length).keys()]);
  return visualizationSteps;
};

export default InsertionSort;
