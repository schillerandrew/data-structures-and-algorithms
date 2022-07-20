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

  fizzBuzzTree(tree) {
    if (!tree.root) {
      return new BinaryTree();
    }
    let treeCopy =JSON.parse(JSON.stringify(tree));
    const traverse = (node) => {
      if (node.value % 3 !== 0 && node.value % 5 !== 0) {
        node.value = node.value.toString();
      }
      if (node.value % 3 === 0 && node.value % 5 === 0) {
        node.value = 'FizzBuzz';
      }
      if (node.value % 3 !== 0 && node.value % 5 === 0) {
        node.value = 'Buzz';
      }
      if (node.value % 3 === 0 && node.value % 5 !== 0) {
        node.value = 'Fizz';
      }
      if (node.left) {
        traverse(node.left)
      }
      if (node.right) {
        traverse(node.right)
      }
    };
    traverse(treeCopy.root);
    return treeCopy;
  }
}

module.exports = {
  Node,
  BinaryTree
};
