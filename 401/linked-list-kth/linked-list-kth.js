'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  kthFromEnd(k) {
    if (!this.head) {
      return 'There is no linked list to check.';
    } else if (k < 0) {
      return 'That is not a valid spot in the linked list!'
    }
    let current = this.head;
    let count = 0;
    let arrayifiedList = [];
    while (current) {
      arrayifiedList[count] = current.value;
      current = current.next;
      count++;
    }
    if (k >= arrayifiedList.length) {
      return 'That is not a valid spot in the linked list!'
    }
    return arrayifiedList[arrayifiedList-k-1];
  }
}

module.exports = {
  Node,
  LinkedList,
};
