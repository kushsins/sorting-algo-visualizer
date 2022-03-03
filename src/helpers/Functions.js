
const max = 100;
const min = 10;

export const generateRandomArray = ({arraySize} = {}) =>{
    let randomizedArray = [];

    for(let i = 0; i < arraySize;i++){
        randomizedArray.push(Math.floor(Math.random() * (max - min) + min));
    }
    return randomizedArray;
}

export const newStep = (array) => {
    return [
      {
        array: [...array],
        comparing: [],
        swapping: [],
        groupC: [],
        groupD: [],
        sorted: []
      }
    ];
  };
  
  export const addStep = (
    visualizationSteps,
    array,
    sorted = [],
    comparing = [],
    swapping = [],
    groupC = [],
    
  ) => {
    visualizationSteps.push({
      array: [...array],
      comparing: [...comparing],
      swapping: [...swapping],
      groupC: [...groupC],
      sorted: [...sorted]
    });
  };
  
  export const lastSorted = (visualizationSteps) => {
    return visualizationSteps[visualizationSteps.length - 1].sorted;
  };
  
  export const swap = (array, i, j) => {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  };
  
  export const createRange = (start, end) => {
    return [...Array(end - start).keys()].map((elem) => elem + start);
  };
  
  

