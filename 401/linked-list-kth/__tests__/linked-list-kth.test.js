'use strict';

let { LinkedList } = require('../linked-list-kth');


describe('Linked list testing', () => {

  let list = new LinkedList();

  test('Instantiate an empty linked list', () => {
    expect(list.head).toBeNull();
    expect(list.head).toBeFalsy();
  });
});
