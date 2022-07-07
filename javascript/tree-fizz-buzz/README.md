# Challenge Summary

Write a function called fizzBuzzTree.

- Arguments: binary tree
- Return: new binary tree

Determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:

- If the value is divisible by 3, replace the value with “Fizz”
- If the value is divisible by 5, replace the value with “Buzz”
- If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
- If the value is not divisible by 3 or 5, simply turn the number into a String.

> ## Whiteboard Process

![whiteboard](./tree-fizz-buzz.jpg)

> ## Approach & Efficiency

I'm still not certain what traversal is best, but I'm guessing pre-order simply because that starts with the root. But I'm unclear on how to form the new (return-value) tree while I'm traversing the input tree, so that may change up which traversal I use, and also possibly the use of a stack or queue along with it. Big O time and space will likely be O(n), unless I decide to use a breadth-first traversal.

> ## Solution

Code is available in the file `tree-fizz-buzz.js`.
