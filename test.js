let array1 = [980, 313, 545, 464, 745, 999, 794, 134, 431, 829, 656, 482, 191, 557, 949];
/*compare 5 - 3 5>3 so swap
[3,5,4,5,...]
compare 5 - 4 5>4 so swap
[3,4,5,5]
compare 5 - 5 5=5 so keep
go to end of array
repeat until a pass is completed without changing any values

*/

function bubbleSort(array) {
  let changed = true;
  do {
    let numberOfChanged = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i+1]) {
        let firstValue = array[i];
        array[i] = array[i+1];
        array[i+1] = firstValue;
        numberOfChanged++;
      }
    }
    if (numberOfChanged === 0) {
      changed = false;
    }
  } while(changed);
  return array;
}


/*function merge(firstArray, secondArray) {
  let combinedArray = [];

  //array.length equates to falsy if 0 so loop until both first and second arrays are empty
  while (firstArray.length || secondArray.length) {
    //set default value of Infinity if array is empty
    let firstValue = Infinity;
    let secondValue = Infinity;
    //set values to the first element in each array if array is greater than 0
    if (firstArray.length) {
      firstValue = firstArray[0];
    }
    if (secondArray.length) {
      secondValue = secondArray[0];
    }

    //find the smallest number, remove from it's array, and assign to variable
    let smallestNumber;
    if (firstValue < secondValue) {
      smallestNumber = firstArray.shift();
    } else {
      smallestNumber = secondArray.shift();
    }

    //add the smallest number to the sorted combined array
    combinedArray.push(smallestNumber);
  }
  //return the sorted combined array
  return combinedArray;
}*/

function mergeSort(array, low, high) {


  if (low < high) {
    //split array in half into to smaller arrays
    let middle = low + Math.floor((high-low)/2);

    //save sorted arrays in a variable
    mergeSort(array, low, middle);
    mergeSort(array, middle+1, high);

    merge(array, low, middle, high);
  }
}

function merge(array, low, middle, high) {
  let secondArrayStart = middle+1;

  if (array[middle] <= array[secondArrayStart]) {
    return;
  }


  while (low <= middle && secondArrayStart <= high) {
    if (array[low] < array[secondArrayStart]) {
      low++;
    } else {
      let valueToMove = array[secondArrayStart];

      for (let i = secondArrayStart; i > low; i--) {
        array[i] = array[i-1];
      }


      array[low] = valueToMove;

      low++;
      middle++;
      secondArrayStart++;
    }
  }
  console.log(array);
}

function selectionSort(array, startIndex) {

  let smallestIndex = startIndex;
  for (let i = startIndex; i < array.length; i++) {
    if (array[i] < array[smallestIndex]) {
      smallestIndex = i;
    }
  }


  //swap(array[startIndex], array[smallestIndex]);

  firstNumber = array[startIndex];
  array[startIndex] = array[smallestIndex];
  array[smallestIndex] = firstNumber;
  console.log(array);
  if (startIndex+1 > array.length-1) {
    return;
  }
  selectionSort(array, startIndex+1);

}

//parent = Math.floor((index-1)/2)
//children = (index*2)+1 && (index*2)+2
function heapSort(array) {
  let index = 0;
  let childIndex = (index*2)+1;

  if (array[childIndex] > array[index]) {
    let firstValue = array[childIndex]
    array[childIndex] = array[index];
    array[index] = firstValue;
  }
  console.log(array)
}

//returns true if given node has no children
function isLeaf(index, numberOfNodes) {
  return (index >= Math.floor(numberOfNodes/2) && index <= numberOfNodes-1);
}

//returns parent of a given node
function parent(index) {
  return Math.floor((index-1)/2);
}

//returns left child of a given node
function leftChild(index)  {
  return (index*2)+1;
}

//returns right child of a given node
function rightChild(index)  {
  return (index*2)+2;
}


//console.log(array1.length-1)
//console.log(bubbleSort(array1));
//console.log(mergeSort(array1, 0, array1.length-1));
//console.log(array1)
//console.log(selectionSort(array1, 0));
heapSort(array1);
