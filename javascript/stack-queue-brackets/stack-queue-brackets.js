'use strict';

class Node {
  constructor(value, pointer) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  validateBrackets(string){
    let stack = new Stack();
    if (string[0] === ')' || string[0] === ']' || string[0] === '}') {
      return false;
    }
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
        stack.push(string[i]);
      }
      if (string[i] === ')' || string[i] === ']' || string[i] === '}') {
        if (stack.peek() === '(' && string[i] === ')') {
          stack.pop();

        } else if (stack.peek() === '[' && string[i] === ']') {
          stack.pop();
        } else if (stack.peek() === '{' && string[i] === '}') {
          stack.pop();
        }
      }
    }
    return stack.isEmpty();
  }

  push (value) {
    const node = new Node(value);
    if (!this.top) {
      this.top = node;
      return;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop () {
    if (this.isEmpty()) {
      return 'The stack is empty -- nothing to remove!'
    } else {
      let topValue = this.top.value;
      this.top = this.top.next;
      return topValue;
    }
  }

  peek () {
    if (this.isEmpty()) {
      return 'The stack is empty -- no value to return!';
    } else {
      return this.top.value;
    }
  }

  isEmpty () {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { Stack }

let stack = new Stack();
stack.validateBrackets('()[]{}');
