'use strict';

function insertionSort(arr) {
  for (let i = 1; i <= arr.length; i++) {
    // i begins at 1 and increments by 1
    // for loop runs a number of times equal to the array's length
    let j = i - 1; // j begins at 0
    let temp = arr[i]; // temp stores off a value so it can be moved to the left one index

    // console.log('J for', j);

    while (j >= 0 && temp < arr[j]) {
      // starting at the front of the array, compare two adjacent values:
      // whenever j isn't below 0 (the array has indexes to the left), and
      // whenever the right-side value is larger than the left-side value:
      arr[j + 1] = arr[j] // the right-side index takes on the left-side value
      j--; // j decrements by 1 so that the following index assignment, which uses j, is shifted one index to the left
      arr[j + 1] = temp; // the saved value is dropped in what is now the left-side index (because j decremented by 1)

      // console.log('J while', j);
      // console.log(arr);
    }
  }
}

module.exports = insertionSort;

let array = [8, 4, 23, 42, 16, 15];

insertionSort(array);

// console.log(array);
