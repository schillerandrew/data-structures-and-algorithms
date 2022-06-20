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

  append(newValue){
    const newNode = new Node(newValue);
    if(!this.head){
      this.head = newNode;
      return;
    }

    let current = this.head;

    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  insertAfter(findThisValue, newValue){
    const newNode = new Node(newValue);
    if(!this.head){
      this.head = newNode;
      return;
    }

    let current = this.head;

    while(current){
      if(current !== findThisValue){
        current = current.next;
      }
      next = current.next;
      current.next = newNode;
      newNode.next = next;
      return;
    }
    return 'No match found';
  }
}
