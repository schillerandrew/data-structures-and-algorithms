'use strict';

let { Node, BinaryTree } = require('./tree-fizz-buzz');

describe('FizzBuzz tree testing', () => {

  let tree = new BinaryTree();

  test('Empty-tree argument returns an empty tree', () => {
    let returnTree = tree.fizzBuzzTree(tree);

    expect(returnTree).toEqual({ 'root': null });;
  })

  test('Simple 3-5-15 tree returns: Fizz, Buzz, Fizzbuzz', () => {
    let root = new Node(3);
    tree.root = root;
    root.left = new Node(5);
    root.right = new Node(15);
    let returnTree = tree.fizzBuzzTree(tree);

    expect(returnTree.root.value).toBe('Fizz');
    expect(returnTree.root.left.value).toBe('Buzz');
    expect(returnTree.root.right.value).toBe('FizzBuzz');
  })

  test('Numbers not divisible by 3 nor 5 are stringified', () => {
    let oldTree = new BinaryTree();
    let root = new Node(3);
    oldTree.root = root;
    root.left = new Node(5);
    root.right = new Node(15);
    root.right.right = new Node(2);
    let returnTree = oldTree.fizzBuzzTree(oldTree);

    expect(returnTree.root.value).toBe('Fizz');
    expect(returnTree.root.left.value).toBe('Buzz');
    expect(returnTree.root.right.value).toBe('FizzBuzz');
    expect(returnTree.root.right.right.value).toBe('2');
    expect(oldTree.root.value).toBe(3);
  })
})
