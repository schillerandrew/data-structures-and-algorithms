# Singly Linked List

A new implementation of linked list functionality.

> ## Challenge

Create a node class to be used with a linked list class that has the ability to: add new nodes to the front, determine whether a value exists in the list, and list off all the values in the list.

> ## Approach & Efficiency

I didn't need to consider my approach too much, because there weren't too many options to choose from: With the insert method, the instructions said to use O(1) time performance, and also traversing a linked list isn't necessary if you're adding notes to the front instead of the back.

One area where I did think about my approach was whether to use a traverse method inside of my includes and toString methods -- especially since they all have O(n) time performance. But the traverse method only does something once it's reached the end, whereas those two methods want to do something with each node, so it didn't make sense to me to create and incorporate a traverse method.

> ## API

> insert

- Arguments: value
- Returns: nothing
- Adds a new node with that value to the head of the list with an O(1) Time performance.

> includes

- Arguments: value
- Returns: Boolean
- Indicates whether that value exists as a Node’s value somewhere within the list.

> toString

- Arguments: none
- Returns: a string representing all the values in the Linked List, formatted as: `"{ a } -> { b } -> { c } -> NULL"`



