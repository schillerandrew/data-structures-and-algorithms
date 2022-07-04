'use strict';

let { Node, BinaryTree, BinarySearchTree } = require('../trees');

describe('Binary tree testing', () => {

  let tree = new BinaryTree();
  let root = new Node();
  let searchTree = new BinarySearchTree;
  let results = [];

  test('Instantiate an empty tree', () => {
    expect(tree.root).toBeNull();
    expect(tree.root).toBeFalsy();
  })

  test('Instantiate a tree with a single root node', () => {
    tree.root = root;

    expect(tree.root).toBeTruthy();
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  })

  test('Add a left child and right child properly to a node', () => {
    searchTree.root = root;
    searchTree.root.value = 10;
    searchTree.add(15);
    searchTree.add(5);

    expect(root.left.value).toEqual(5);
    expect(root.right.value).toEqual(15);
  })

  test('Return a collection from a pre-order traversal', () => {
    searchTree.root.left.left = new Node(4);
    searchTree.root.left.right = new Node(6);
    searchTree.root.right.left = new Node(14);
    results = searchTree.preOrder();

    expect(results).toEqual([10, 5, 4, 6, 15, 14])
  })

  test('Return a collection from an in-order traversal', () => {
    results = searchTree.inOrder();

    expect(results).toEqual([4, 5, 6, 10, 14, 15]);
  })

  test('Return a collection from a post-order traversal', () => {
    results = searchTree.postOrder();

    expect(results).toEqual([4,6,5,14,15,10]);
  })
})
