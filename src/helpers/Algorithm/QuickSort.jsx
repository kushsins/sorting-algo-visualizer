import { addStep, newStep, lastSorted, swap, createRange } from "../Functions";

const QuickSort = (nums) => {
  const visualizationSteps = newStep(nums);

  function choosePivot(array, start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
  }

  function partition(array, start, end) {
    let i = start + 1;
    let j = start + 1;

    addStep(visualizationSteps, array, lastSorted(visualizationSteps), [start]);

    while (j <= end) {
      if (array[j] < array[start]) {
        addStep(
          visualizationSteps,
          array,
          lastSorted(visualizationSteps),
          [start],
          [j],
          createRange(start + 1, i)
        );

        swap(array, i, j);

        addStep(
          visualizationSteps,
          array,
          lastSorted(visualizationSteps),
          [start],
          [i],
          createRange(start + 1, i)
        );
        i += 1;
      }
      j += 1;
    }

    addStep(
      visualizationSteps,
      array,
      lastSorted(visualizationSteps),
      [i - 1],
      [],
      createRange(start, i - 1)
    );
    swap(array, start, i - 1);

    addStep(
      visualizationSteps,
      array,
      lastSorted(visualizationSteps),
      [i - 1],
      [],
      createRange(start, i - 1)
    );
    return i - 1;
  }

  function recursiveQuickSort(array, start, end) {
    if (start >= end) {
      if (start === end) {
        addStep(visualizationSteps, array, [
          ...lastSorted(visualizationSteps),
          start,
        ]);
      }
      return null;
    }

    let pivot = choosePivot(array, start, end);

    addStep(visualizationSteps, array, lastSorted(visualizationSteps), [pivot]);

    swap(array, start, pivot);

    addStep(visualizationSteps, array, lastSorted(visualizationSteps), [pivot]);

    pivot = partition(array, start, end);

    addStep(visualizationSteps, array, [
      ...lastSorted(visualizationSteps),
      pivot,
    ]);

    recursiveQuickSort(array, start, pivot - 1);
    recursiveQuickSort(array, pivot + 1, end);
  }

  recursiveQuickSort(nums, 0, nums.length - 1);

  return visualizationSteps;
};

export default QuickSort;
