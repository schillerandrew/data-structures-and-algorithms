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
  // console.log('pivot=', pivot);
  let low = left - 1;
  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
      // console.log(arr, 'after arr[i] <= pivot');
    }
  }
  swap(arr, right, low + 1);
  // console.log(arr, 'after swap low + 1');
  return (low + 1);
}

const swap = (arr, i, low) => {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

module.exports = quickSort;