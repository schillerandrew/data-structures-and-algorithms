'use strict';

let { LinkedList } = require('../linked-list-insertions');

describe('Linked list insertion testing', () => {

  let list = new LinkedList();

  test('Add a node to the end of the linked list', () => {
    list.append('a');

    expect(list.head.value).toEqual('a');
  });

  test('Add multiple nodes to the end of a linked list', () => {
    list.append('b');
    list.append('c');

    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
  });

  test('Insert a node before a node located in the middle of a linked list', () => {
    list.insertBefore('b', '3');

    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('3');
    expect(list.head.next.next.value).toEqual('b');
    expect(list.head.next.next.next.value).toEqual('c');
  });

  test('Insert a node before the first node of a linked list', () => {
    list.insertBefore('a', '4');

    expect(list.head.value).toEqual('4');
    expect(list.head.next.value).toEqual('a');
    expect(list.head.next.next.value).toEqual('3');
  });

  test('Insert after a node in the middle of the linked list', () => {
    list.insertAfter('3', '5');

    expect(list.head.value).toEqual('4');
    expect(list.head.next.value).toEqual('a');
    expect(list.head.next.next.value).toEqual('3');
    expect(list.head.next.next.next.value).toEqual('5');
  });

  test('Insert a node after the last node of the linked list', () => {
    list.insertAfter('c', '6');

    expect(list.head.value).toEqual('4');
    expect(list.head.next.value).toEqual('a');
    expect(list.head.next.next.value).toEqual('3');
    expect(list.head.next.next.next.value).toEqual('5');
    expect(list.head.next.next.next.next.value).toEqual('b');
    expect(list.head.next.next.next.next.next.value).toEqual('c');
    expect(list.head.next.next.next.next.next.next.value).toEqual('6');
  });
});
