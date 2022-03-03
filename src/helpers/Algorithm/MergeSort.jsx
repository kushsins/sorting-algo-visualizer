import { newStep, addStep } from "../Functions";

const MergeSort = (array) => {
  // Initial State
  const visualizationSteps = newStep(array);

  function merge(original, start, mid, end) {
    const left = original.slice(start, mid);
    const right = original.slice(mid, end);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        addStep(visualizationSteps, original, [], [], [k + start]);
        original[k + start] = left[i];
        i++;
        addStep(visualizationSteps, original, [], [], [k + start]);
      } else {
        addStep(visualizationSteps, original, [], [], [k + start]);
        original[k + start] = right[j];
        j++;
        addStep(visualizationSteps, original, [], [], [k + start]);
      }
      k++;
    }
    while (i < left.length) {
      addStep(visualizationSteps, original, [], [], [k + start]);
      original[k + start] = left[i];
      i++;
      k++;
      addStep(visualizationSteps, original, [], [], [k + start]);
    }
    while (j < right.length) {
      addStep(visualizationSteps, original, [], [], [k + start]);
      original[k + start] = right[j];
      j++;
      k++;
      addStep(visualizationSteps, original, [], [], [k + start]);
    }

    left.length = 0;
    right.length = 0;
  }

  function recursiveMergeSort(original, start, end) {
    const length = end - start;
    if (length < 2) {
      if (length < 1) return original;
      else return [original[start]];
    }

    const midPoint = Math.floor((start + end) / 2);

    // Visualize: First Half
    addStep(
      visualizationSteps,
      original,
      [],
      [...Array(midPoint - start).keys()].map((i) => i + start)
    );
    recursiveMergeSort(original, start, midPoint);

    // Visualize: Second Half
    addStep(
      visualizationSteps,
      original,
      [],
      [...Array(end - midPoint).keys()].map((i) => i + midPoint)
    );
    recursiveMergeSort(original, midPoint, end);

    merge(original, start, midPoint, end);
  }

  recursiveMergeSort(array, 0, array.length);

  // Visualize: Mark all elements as sorted
  addStep(visualizationSteps, array, [...Array(array.length).keys()]);
  return visualizationSteps;
};

export default MergeSort;
