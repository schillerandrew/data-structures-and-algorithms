'use strict';

let { LinkedList, Node } = require('../linked-list-zip');

describe('Linked list testing', () => {

  let list = new LinkedList();
  let list1 = new LinkedList();
  let list2 = new LinkedList();

  let node1List1 = new Node();
  let node2List1 = new Node();
  let node3List1 = new Node();

  let node1List2 = new Node();
  let node2List2 = new Node();
  let node3List2 = new Node();

  test('Only the first list is empty', () => {
    node1List1.value = null;
    node1List2.value = '2';
    list2.head = node1List2

    expect(list.zipLists(list1, list2)).toEqual('2 -> null');
  })

  test('Only the second list is empty', () => {
    node1List1.value = '1';
    node1List2.value = null;
    list1.head = node1List1;
    list2.head = null;

    expect(list.zipLists(list1, list2)).toEqual('1 -> null');
  })

  test('Both of the lists are empty', () => {
    list1.head = null;
    list2.head = null;

    expect(list.zipLists(list1, list2)).toEqual(null);
  })

  test('Neither of the lists are empty, and both have the same number of nodes', () => {
    node1List1.value = '1';
    node1List1.next = node2List1;
    node2List1.value = '3';
    node2List1.next = null;
    list1.head = node1List1;

    node1List2.value = '2';
    node1List2.next = node2List2;
    node2List2.value = '4';
    node2List2.next = null;
    list2.head = node1List2;

    expect(list.zipLists(list1, list2)).toEqual('1 -> 2 -> 3 -> 4 -> null');
  })

  test('Neither of the lists are empty, and the first list has more nodes than the second', () => {
    node1List1.value = '1';
    node1List1.next = node2List1;
    node2List1.value = '3';
    node2List1.next = node3List1;
    node3List1.value = '5';
    node3List1.next = null;
    list1.head = node1List1;

    node1List2.value = '2';
    node1List2.next = null;
    list2.head = node1List2;

    expect(list.zipLists(list1, list2)).toEqual('1 -> 2 -> 3 -> 5 -> null');
  })

  test('Neither of the lists are empty, and the second list has more nodes than the first', () => {
    node1List1.value = '1';
    node1List1.next = null;
    list1.head = node1List1;

    node1List2.value = '2';
    node1List2.next = node2List2;
    node2List2.value = '4';
    node2List2.next = node3List2;
    node3List2.value = '6';
    node3List2.next = null;
    list2.head = node1List2;

    expect(list.zipLists(list1, list2)).toEqual('1 -> 2 -> 4 -> 6 -> null');
  })

})


