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

    if (current.value === findThisValue) {
      this.head = newNode;
      newNode.next = current;
    }

    while (current.next) {
      if (current.next.value === findThisValue) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
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
      if (current.value === findThisValue) {
        newNode.next = current.next;
        current.next = newNode;
      }
      current = current.next;
    }
    return 'No match found';
  }
}

module.exports = {
  Node,
  LinkedList,
};
