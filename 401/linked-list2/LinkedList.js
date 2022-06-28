'use strict';

class Node {
  constructor(value, pointer) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    } else {
      let temp = this.head;
      this.head = node;
      node.next = temp;
    }
  }

  includes(value) {
    let current = this.head;
    while(current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let str = '';
    while(current) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }
    str += "NULL";
    return str;
  }
}


// let linkedList = new LinkedList();

// let nodeA = new Node('a');
// let nodeB = new Node('b');
// let nodeC = new Node('c');

// console.log(linkedList);

// console.log(JSON.stringify(linkedList));
// linkedList.insert('a');
// console.log(JSON.stringify(linkedList));
// linkedList.insert(nodeB);
// linkedList.insert(nodeC);

// console.log(JSON.stringify(linkedList));


module.exports = {
  Node,
  LinkedList
}

/*
### Checklist

- [x] Node class
- [x] LinkedList class
- [x] insert method
- [x] includes method
- [x] toString method
- [] test: instantiate linked list
- [] test: insert one node
- [] test: head points to first node
- [] test: insert multiple nodes
- [] test: true when value found
- [] test: false when value not found
- [] test: return string of all node values
*/
