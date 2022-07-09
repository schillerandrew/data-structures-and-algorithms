'use strict';

class AnimalNode {
  constructor(value, type) {
    this.value = value;
    this.next = null;
    this.type = type;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value, type) {
    let animal = new AnimalNode(value, type);
    if (this.back === null) {
      this.back = animal;
      this.front = animal;
    } else {
      this.back.next = animal;
      this.back = animal;
    }
  }

  dequeue(pref) {
    if (this.front === null) {
      return 'The queue is empty -- nothing to dequeue.';
    } else if (pref !== 'cat' && pref !== 'dog') {
      return null;
    }
    let returnValue;
    if (this.front.type === pref) {
      returnValue = this.front.value;
      this.front = this.front.next
      console.log('FRONT >>>', this.front);
      return returnValue;
    }
    let currentNode = this.front.next;
    let previousNode = this.front;
    while(currentNode) {
      if (pref === currentNode.type) {
        returnValue = currentNode.value;
        previousNode.next = currentNode.next;
        currentNode.next = null;
        return returnValue;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
}

let shelter = new AnimalShelter();
shelter.enqueue('Mo', 'cat');
shelter.enqueue('Clifford', 'dog');
shelter.dequeue('cat');

module.exports = { AnimalShelter };
