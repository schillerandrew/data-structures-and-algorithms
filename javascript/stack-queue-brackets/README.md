# Challenge Summary

- Write a function called validate brackets
- Arguments: string
- Return: boolean
  - representing whether or not the brackets in the string are balanced

## Whiteboard Process

![whiteboard](./stack-queue-brackets.jpg)

## Approach & Efficiency

Initially my approach was overly complicated, using two different stacks to locate and remove each pair of balanced brackets. Once I understood that using one stack with first-in-last-out provides symmetry with its pushing and popping, I was on the right track. I was already mindful of how to handle non-bracket characters, and the use of a stack to store "opener" brackets allows for easy filtering of non-bracket characters.

- Big O time: O(n), because you must traverse the entire string index by index to pop all of the "opener" brackets into the stack.
- Big O space: O(1), because the return value is a boolean.

## Solution

Code is available in the file stack-queue-brackets.js.
