> # Trees

> ## Challenge

Kicking off a new implementation, of a date structure, build classes for binary trees and binary search trees (sub-class).

> ## Approach & Efficiency

All of the traversing methods required the output to be in an array, so I wasn't too worried about potentially bumping up against O(n). For the add method I wondered if it was best to also traverse, but I remembered that because binary search trees always go left or right depending on the input value, it's not necessary to completely traverse a BST when adding a value -- so I was confident in using a while loop followed by some if statements.

> ## API

> Node

- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

> Binary Tree

- Create a Binary Tree class
- Define a method for each of the depth first traversals:

> preOrder

> inOrder

> postOrder

which returns an array of the values, ordered appropriately.

> Binary Search Tree

- Create a Binary Search Tree class
- This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:

> add

- Arguments: value
- Return: nothing
- Adds a new node with that value in the correct location in the binary search tree.

> contains

- Argument: value
- Returns: boolean indicating whether or not the value is in the tree at least once.
