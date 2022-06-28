'use strict';

let { LinkedList } = require('./LinkedList');


describe('Linked list testing', () => {

  let list = new LinkedList();

  test('Instantiate an empty linked list', () => {
    expect(list.head).toBeNull();
    expect(list.head).toBeFalsy();
  });

  test('Insert into the linked list', () => {
    list.insert('b');
    list.insert('a');

    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next).toBeNull();
  });

  test('Head property points to first node in list', () => {
    let expected = list.head.value;

    expect('a').toEqual(expected);
  });

  test('Insert multiple nodes to front of list', () => {
    list.insert('c');

    expect(list.head.value).toEqual('c');
    expect(list.head.next.value).toEqual('a');
    expect(list.head.next.next.value).toEqual('b');
    expect(list.head.next.next.next).toBeNull();
  });

  test('Returns true when value is found in list', () => {
    let value = list.includes('a');

    expect(value).toBe(true);
  });

  test('Returns false when value is not found in list', () => {
    let value = list.includes('fake');

    expect(value).toBe(false);
  });

  test('Returns a collection of all values in list', () => {
    let str = list.toString();
    let expected = '{ c } -> { a } -> { b } -> NULL';

    expect(str).toEqual(expected);
  });
});
