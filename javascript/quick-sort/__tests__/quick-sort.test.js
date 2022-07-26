'use strict';

let quickSort = require('../quick-sort');

describe('Quick sort testing', () => {

  test('Basic array sorts successfully', () => {
    let array = [8, 4, 23, 42, 16, 15];
    quickSort(array, 0, 5);

    expect(array[0]).toEqual(4);
    expect(array[1]).toEqual(8);
    expect(array[2]).toEqual(15);
    expect(array[3]).toEqual(16);
    expect(array[4]).toEqual(23);
    expect(array[5]).toEqual(42);
  })

  test('Reverse-sorted array sorts successfully', () => {
    let array = [20, 18, 12, 8, 5, -2];
    quickSort(array, 0, 5);

    expect(array[0]).toEqual(-2);
    expect(array[1]).toEqual(5);
    expect(array[2]).toEqual(8);
    expect(array[3]).toEqual(12);
    expect(array[4]).toEqual(18);
    expect(array[5]).toEqual(20);
  })

  test('Array with repeating values, sorts successfully', () => {
    let array = [5, 12, 7, 5, 5, 7];
    quickSort(array, 0, 5);

    expect(array[0]).toEqual(5);
    expect(array[1]).toEqual(5);
    expect(array[2]).toEqual(5);
    expect(array[3]).toEqual(7);
    expect(array[4]).toEqual(7);
    expect(array[5]).toEqual(12);
  })

  test('Array that\'s mostly already sorted, sorts successfully', () => {
    let array = [2, 3, 5, 7, 13, 11];
    quickSort(array, 0, 5);

    expect(array[0]).toEqual(2);
    expect(array[1]).toEqual(3);
    expect(array[2]).toEqual(5);
    expect(array[3]).toEqual(7);
    expect(array[4]).toEqual(11);
    expect(array[5]).toEqual(13);
  })
})
