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

function mergeSort(array, low, high) {
  if (low < high) {
    let middle = low + Math.floor((high-low)/2);
    mergeSort(array, low, middle);
    mergeSort(array, middle+1, high)
    //merge(array, low, middle, high);
  }
}

/*function merge(array, low, middle, high) {
  let temporaryArray1 = [];
  let temporaryArray2 = [];

  let completedArray = [];

  for (let i = low; i < middle; i++) {
    temporaryArray1.push(array[i]);
  }
  for (let i = middle+1; i < high; i++) {
    temporaryArray2.push(array[i]);
  }
  let firstNumber = temporaryArray1[0];
  let secondNumber = temporaryArray2[0];

  let index1 = 0;
  let index2 = 0;

  while (temporaryArray1.length + temporaryArray2.length > 1) {

  }
  if (index1 > temporaryArray1.length-1) {
    index1 = index2+1;
    firstNumber = temporaryArray2[index1];
    temporaryArray1Complete = true;
  } else if (index2 > temporaryArray2.length-1) {
    index2 = index1+1;
    secondNumber = temporaryArray1[index2];
    temporaryArray2Complete = true;
  } else {
    firstNumber = temporaryArray1[index1];
    secondNumber = temporaryArray2[index2];
  }

  if (firstNumber < secondNumber) {
    completedArray.push(firstNumber);
    index1++;
  } else {
    completedArray.push(secondNumber);
    index2++;
  }


  //while (temporaryArray1.length > 0 || temporaryArray2.length > 0) {
    if (temporaryArray1[0] < temporaryArray2[0]) {
      //if (temporaryArray1[0] < )
    }
  //}
  console.log('here')
  console.log(temporaryArray1);
  console.log(temporaryArray2);
}*/
function merge(firstArray, secondArray) {
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
}

function mergeSort(array) {
  //if the length of the array is less than one assume it's trivially sorted
  if (array.length <= 1) {
    return array;
  }

  //split array in half into to smaller arrays
  let splitIndex = Math.floor(array.length/2);
  let leftArray = array.slice(0, splitIndex);
  let rightArray = array.slice(splitIndex);

  //save sorted arrays in a variable
  let sortedLeftArray = mergeSort(leftArray);
  let sortedRightArray = mergeSort(rightArray);

  //merge sorted arrays into a sorted combined array
  return merge(sortedLeftArray, sortedRightArray);
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



//console.log(bubbleSort(array1));
console.log(mergeSort(array1));
//console.log(selectionSort(array1, 0));
