'use strict';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  breadthFirst(tree) {
    let queue = new Queue();
    let array = [];
    let current = tree.root;
    queue.enqueue(current);
    while (!queue.isEmpty()) {
      current = queue.dequeue();
      array.push(current);
      if (current.left) {
        queue.enqueue(current.left);
      }
      if (current.right) {
        queue.enqueue(current.right);
      }
    }
    return array;
  }
}

class Node {
  constructor(value, pointer) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.back) {
      this.front = node;
      this.back = node;
      return;
    } else {
      this.back.next = node;
      this.back = node;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'The queue is empty -- nothing to remove!';
    } else {
      let frontValue = this.front.value;
      this.front = this.front.next;
      return frontValue;
    }
  }

  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  Node,
  Queue,
  TreeNode,
  BinaryTree
};
