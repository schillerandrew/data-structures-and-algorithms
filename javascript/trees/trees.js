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

  preOrder() {
    let results = [];
    const traverse = (node) => {
      results.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      results.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return results;
  }

  postOrder() {
    let results = [];
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      results.push(node.value);
    }
    traverse(this.root);
    return results;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
    this.root = null;
  }

  add(value) {
    let current = this.root;
    while (current.left && current.right) {
      if (current.value === value) {
        return 'Value already exists in this tree.';
      }
      if (current.value > value) {
        current = current.left;
      }
      if (current.value < value) {
        current = current.right;
      }
    }
    if (current.value === value) {
      return 'Value already exists in this tree.';
    }
    if (current.value > value) {
      current.left = new Node(value);
    }
    if (current.value < value) {
      current.right = new Node(value);
    }
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};
