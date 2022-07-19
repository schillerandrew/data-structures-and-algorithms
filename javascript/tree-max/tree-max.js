'use strict';

class Node {
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

  maxValue() {
    if (!this.root) {
      return 'This tree is empty and has no maximum value -- unless you count null!';
    }
    let maxValue = 0;
    const traverse = (node) => {
      if (node.value > maxValue) {
        maxValue = node.value;
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return maxValue;
  }
}

module.exports = {
  Node,
  BinaryTree
}
