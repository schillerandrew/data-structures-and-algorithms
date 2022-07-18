'use strict';

const { Node, Queue, BinaryTree, TreeNode } = require('./tree-breadth-first');

describe('Breadth-first tree traversal testing', () => {
  test('Tree 1-2-3-4-5-6-7 return array [1,...,7]', () => {
    let tree = new BinaryTree();
    let root = new TreeNode(1);

    tree.root = root;
    tree.root.left = new TreeNode(2);
    root.left.left  = new TreeNode(4);
    root.left.right  = new TreeNode(5);
    root.right = new TreeNode(3);
    root.right.left  = new TreeNode(6);
    root.right.right  = new TreeNode(7);

    expect(tree.breadthFirst(tree)).toEqual([1,2,3,4,5,6,7]);
  })
})
