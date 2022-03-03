import { addStep, newStep, lastSorted, swap } from "../Functions";

const BubbleSort = (array) => {
  const visualizationSteps = newStep(array);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      // Comparing Arr[j] and Arr[j + 1]
      addStep(visualizationSteps, array, lastSorted(visualizationSteps), [
        j,
        j + 1,
      ]);
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        // Swapping Arr[j] and Arr[j + 1]
        addStep(
          visualizationSteps,
          array,
          lastSorted(visualizationSteps),
          [],
          [j, j + 1]
        );
      }
    }
    addStep(visualizationSteps, array, [
      ...lastSorted(visualizationSteps),
      array.length - 1 - i,
    ]);
  }

  return visualizationSteps;
};
export default BubbleSort;
