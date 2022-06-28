'use strict';

const supertest = require('supertest');
const linkedList = require('./LinkedList.js');
const thisTest = supertest(linkedList);


describe('Linked list testing', () => {

  test('Instantiate a linked list', () => {

  });

  test('Insert node to front of list', () => {
    let headNode = thisTest.insert('a');
    expect(headNode.value).toEqual('a');
  });

  test('Head property points to first node in list', () => {

  });

  test('Insert multiple nodes to front of list', () => {

  });

  test('Returns true when value is found in list', () => {

  });

  test('Returns false when value is not found in list', () => {

  });

  test('Returns a string of all values in list', () => {

  });
});
