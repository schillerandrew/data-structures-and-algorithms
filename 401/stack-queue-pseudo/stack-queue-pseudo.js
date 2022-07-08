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

  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
}

class PseudoQueue {
  constructor() {
    this.inputStack = new Stack();
    this.outputStack = new Stack();
  }

  enqueue(value) {
    if (this.inputStack.isEmpty() && this.outputStack.isEmpty()) {
      this.inputStack.push(value);
    } else if (this.outputStack.isEmpty()) {
      this.inputStack.push(value);
    } else if (this.inputStack.isEmpty() && !this.outputStack.isEmpty()) {
      while (!this.outputStack.isEmpty()) {
        this.inputStack.push(this.outputStack.pop());
      }
      this.inputStack.push(value);
    }
  }

  dequeue() {
    if (this.outputStack.isEmpty()) {
      while (!this.inputStack.isEmpty()) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    if (this.inputStack.isEmpty() && this.outputStack.isEmpty()) {
      return 'There is nothing to dequeue.';
    }
    if (!this.outputStack.isEmpty()) {
      return this.outputStack.pop();
    }
  }
}

module.exports = {
  PseudoQueue
}
