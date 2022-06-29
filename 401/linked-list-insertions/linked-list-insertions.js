'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      this.head = newNode;
      return 'No list found';
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(findThisValue, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      return 'No match found';
    }

    let current = this.head;
    let previous = null;

    while (current) {
      if (current !== findThisValue) {
        previous = current;
        current = current.next;
      } else if (current === findThisValue && current === this.head)  {
        newNode = this.head;
        newNode.next = current;
        return 'New node inserted';
      } else if (current === findThisValue) {
        previous.next = newNode;
        newNode.next = current;
        return 'New node inserted';
      }
    }
    return 'No match found';
  }

  insertAfter(findThisValue, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      return 'No match found';
    }

    let current = this.head;

    while (current) {
      if (current !== findThisValue) {
        current = current.next;
      } else if (current === findThisValue) {
        // next = current.next;
        newNode.next = current.next;
        current.next = newNode;
        return 'New node inserted';
      }
    }
    return 'No match found';
  }
}
