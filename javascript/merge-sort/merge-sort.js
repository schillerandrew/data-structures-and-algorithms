'use strict';

function mergeSort(array) {
  let n = array.length;

  if (n > 1) {
    let mid = Math.floor(n / 2); // halfway through array
    // console.log(mid);
    let left = array.slice(0, mid); // left side
    console.log('LEFT', left);
    let right = array.slice(mid, array.length); // right side
    console.log('RIGHT', right);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  } else {
    return array;
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  console.log('START left', left);
  console.log('START right', right);
  console.log('START arr', arr);

  while (i < left.length && j < right.length) {
    console.log('K', k);
    if (left[i] <= right[j]) { // compares two adjacent values from the original array, which are now single-index arrays
      arr[k] = left[i]; // if right-side is larger, the left-side overwrites the right-side
      i++;
    } else { // otherwise (right-side is equal or smaller), the right-side overwrites the left-side
      arr[k] = right[i];
      j++;
    }
    // console.log('WHILE left', left);
    // console.log('WHILE right', right);
    console.log('WHILE arr', arr);
    // console.log('I', i);
    k++;
  }

  if (i === left.length) {
    // set remaining entries in arr to remaining values in right
    // for (let counter = right.length; counter > 0; counter--) {

    //   arr[k] = right[0];

    // }
    // console.log('COUNTER', counter);

    arr[k] = right[0];
  } else {
    // set remaining entries in arr to remaining values in left
    // for (let counter = left.length; counter > 0; counter--) {
    //   arr[k] = left[0];
    // }
    // console.log('ARRAY AT K', arr[k]);
    // console.log('LEFT AT 0', right[0]);
    arr[k] = left[0];
  }
  console.log('IF statement', arr);
}

let arr = [8, 4, 23, 42]
mergeSort(arr);
console.log('FINAL', arr);
