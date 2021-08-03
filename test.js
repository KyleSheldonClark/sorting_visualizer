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
selectionSort(array1, 0);
