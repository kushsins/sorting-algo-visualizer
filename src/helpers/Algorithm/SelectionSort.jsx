import { addStep, newStep, lastSorted, swap } from "../Functions";

const SelectionSort = (array) => {
  const visualizationSteps = newStep(array);

  // Core Algorithm
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      addStep(visualizationSteps, array, lastSorted(visualizationSteps), [
        minIndex,
        j,
      ]);
      if (array[j] < array[minIndex]) {
        addStep(
          visualizationSteps,
          array,
          lastSorted(visualizationSteps),
          [minIndex],
          [j]
        );
        minIndex = j;
        addStep(
          visualizationSteps,
          array,
          lastSorted(visualizationSteps),
          [minIndex],
          [j]
        );
      }
    }

    addStep(
      visualizationSteps,
      array,
      lastSorted(visualizationSteps),
      [],
      [i, minIndex]
    );

    swap(array, i, minIndex);

    addStep(
      visualizationSteps,
      array,
      [...lastSorted(visualizationSteps), i],
      [],
      []
    );
  }

  addStep(visualizationSteps, array, [
    ...lastSorted(visualizationSteps),
    array.length - 1,
  ]);

  return visualizationSteps;
};

export default SelectionSort;
