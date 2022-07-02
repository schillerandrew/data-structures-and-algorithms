'use strict';

let { LinkedList, Node } = require('../linked-list-kth');


describe('Linked list testing', () => {

  let list = new LinkedList();
  let nodeOne = new Node();
  list.head = nodeOne;
  nodeOne.next = null;

  test('k is greater than the length of the linked list', () => {
    expect(list.kthFromEnd(2)).toEqual('That is not a valid spot in the linked list!');
  });

  test('k is equal to the length of the linked list', () => {
    expect(list.kthFromEnd(1)).toEqual('That is not a valid spot in the linked list!');
  });

  test('k is not a positive integer', () => {
    expect(list.kthFromEnd(-1)).toEqual('That is not a valid spot in the linked list!');
  });

  test('linked list has 1 node', () => {
    expect(list.kthFromEnd(1)).toEqual('That is not a valid spot in the linked list!');
  });

  test('k is not at the end, but somewhere in the middle of the linked list', () => {
    let nodeTwo = new Node();
    let nodeThree = new Node();
    nodeOne.next = nodeTwo;
    nodeTwo.next = nodeThree;
    nodeThree.next = null;
    nodeOne.value = 1;
    nodeTwo.value = 2;
    nodeThree.value = 3;

    expect(list.kthFromEnd(1)).toEqual(2);
  });
});
