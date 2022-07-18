'use strict';

let { Node, BinaryTree } = require('../tree-max');

describe('Binary tree testing (find maximum value)', () => {
  let tree = new BinaryTree();
  let root = new Node(0);

  test('Find no max value in empty tree', () => {
    expect(tree.maxValue()).toEqual('This tree is empty and has no maximum value -- unless you count null!');
  })

  test('Find maximum value 0', () => {
    tree.root = root;
    tree.root.left = new Node(0);
    tree.root.right = new Node(0);

    expect(tree.maxValue()).toEqual(0);
  })

  test('Find maximum value 20', () => {
    tree.root.left.left = new Node(20);
    tree.root.left.right = new Node(20);

    expect(tree.maxValue()).toEqual(20);
  })

  test('Find maximum value 100', () => {
    tree.root.value = 50;
    tree.root.right.left = new Node(-5);
    tree.root.right.right = new Node(100);

    expect(tree.maxValue()).toEqual(100);
  })
})
