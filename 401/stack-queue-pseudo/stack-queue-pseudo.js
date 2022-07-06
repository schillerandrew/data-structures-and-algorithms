'use strict';

class Node {
  constructor(value, pointer) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    if (!this.top) {
      this.top = node;
      return;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.isEmpty()) {
      return 'The stack is empty -- nothing to remove!'
    } else {
      let topValue = this.top.value;
      this.top = this.top.next;
      return topValue;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return 'The stack is empty -- no value to return!';
    } else {
      return this.top.value;
    }
  }
}

class PseudoQueue {
  constructor() {
    this.top = null;
  }

  enqueue (value) {
    const node = new Node(value);
    if (!this.top) {
      this.top = node;
      return;
    } else {
      node.next = this.top
      this.top = node;
    }
  }

  dequeue () {
    if (!this.top) {
      return 'The pseudo queue is empty -- nothing to remove!';
    } else {
      let topValue = this.top.value;
      this.top = this.top.next;
      return topValue;
    }
  }
}
