import { addStep, newStep, swap, createRange } from "../Functions";
const ShellSort = (nums) => {
  const visualizationSteps = newStep(nums);

  for (
    let gap = Math.floor(nums.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let j = gap; j < nums.length; j++) {
      for (let i = j - gap; i >= 0; i -= gap) {
        addStep(visualizationSteps, nums, [], [i, i + gap]);
        if (nums[i + gap] < nums[i]) {
          addStep(visualizationSteps, nums, [], [], [i, i + gap]);
          swap(nums, i, i + gap);
          addStep(visualizationSteps, nums, [], [], [i, i + gap]);
        } else {
          break;
        }
      }
    }
  }

  addStep(visualizationSteps, nums, createRange(0, nums.length));
  return visualizationSteps;
};

export default ShellSort;
