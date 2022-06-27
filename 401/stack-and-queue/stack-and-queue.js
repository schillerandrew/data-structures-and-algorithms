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


  push (value) {
    const node = new Node(value);
    if (!this.top) {
      this.top = node;
      return;
    } else {
      node.next = this.top;
      this.top = node;
      // let temp = this.top;
      // this.top = node;
      // node.next = temp;
    }
  }

  pop () {
    if (isEmpty()) {
      return 'The stack is empty -- nothing to remove!'
    } else {
      let topValue = this.top.value;
      this.top = this.top.next;
      return topValue;
    }
  }

  peek () {
    if (this.isEmpty) {
      return 'The stack is empty -- nothing to remove!';
    } else {
      return this.top.value;
    }
  }

  isEmpty () {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  // enqueue (value) {

  // }
  // dequeue()

  peek () {
    if (this.isEmpty) {
      return 'The queue is empty -- nothing to remove!'
    } else {
      return this.front.value;
    }
  }

  isEmpty () {
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
  }
}
