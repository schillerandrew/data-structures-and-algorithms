'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  zipLists(list1, list2) {
    zippedList = '';

    if (!list1.head) { // no nodes in list1
      if (!list2.head) { // no nodes in either list
        return 'null';
      } else { // only list2 has nodes
        let current = list2.head;
        while (current) {
          zippedList = zippedList + current.value + ' -> ';
          current = current.next;
        }
        zippedList = zippedList + 'null';
        return zippedList;
      }
    }

    if (!list2.head) { // no nodes in list2
      if (!list1.head) { // no nodes in either list
        return 'null';
      } else { // only list1 has nodes
        let current = list1.head;
        while (current) {
          zippedList = zippedList + current.value + ' -> ';
          current = current.next;
        }
        zippedList = zippedList + 'null';
        return zippedList;
      }
    }

    if (list1.head && list2.head) { // nodes in both lists
      currentOne = list1.head;
      currentTwo = list2.head;
      while (currentOne && currentTwo) { // both lists have nodes to tally
        zippedList = zippedList + currentOne.value + ' -> ';
        currentOne = currentOne.next;
        zippedList = zippedList + currentTwo.value + ' -> ';
        currentOne = currentTwo.next;
      }
      while (currentOne) { // only list1 has nodes to tally
        zippedList = zippedList + currentOne.value + ' -> ';
        currentOne = currentOne.next;
      }
      while (currentTwo) { // only list2 has nodes to tally
        zippedList = zippedList + currentTwo.value + ' -> ';
        currentTwo = currentTwo.next;
      }
      zippedList = zippedList + 'null';
      return zippedList;
    }
  }
}
