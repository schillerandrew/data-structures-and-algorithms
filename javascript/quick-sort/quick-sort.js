'use strict';

const quickSort = (arr, left, right) => {
  if (left < right) {
    let position = partition(arr, left, right);

    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
}

const partition = (arr, left, right) => {
  let pivot = arr[right];
  console.log('pivot=', pivot);
  let low = left - 1;
  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
      console.log(arr);
    }
  }
  swap(arr, right, low + 1);
  console.log(arr);
  return (low + 1);
}

const swap = (arr, i, low) => {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

let array1 = [8,4,23,42,16,15];
let array2 = [2,3,5,7,13,11];
let array3 = [10, -1, 5, 0];

quickSort(array1, 0, 5);
console.log('FINAL', array1);

// quickSort(array2, 0, 5);
// console.log(array2);

// quickSort(array3, 0, 3);
// console.log(array3);

// let array4 = [-1, 10, 5, 0];
// swap(array4, 3, 1);
// console.log(array4);
