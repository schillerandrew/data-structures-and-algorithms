'use strict';

let { Stack, Queue } = require('../stack-and-queue');

describe('Stack and Queue testing', () => {

  describe('Stack testing', () => {

    let stack = new Stack();

    test('Push onto a stack', () => {
      stack.push(1);

      expect(stack.top).toBeTruthy();
      expect(stack.top.value).toEqual(1);
    })

    test('Push multiple values onto a stack', () => {
      stack.push(2);
      stack.push(3);

      expect(stack.top).toBeTruthy();
      expect(stack.top.next).toBeTruthy();
      expect(stack.top.next.next).toBeTruthy();
      expect(stack.top.value).toEqual(3);
      expect(stack.top.next.value).toEqual(2);
      expect(stack.top.next.next.value).toEqual(1);
    })

    test('Pop off the stack', () => {
      stack.pop();

      expect(stack.top).toBeTruthy();
      expect(stack.top.next).toBeTruthy();
      expect(stack.top.value).toEqual(2);
      expect(stack.top.next.value).toEqual(1);
    })

    test('Empty a stack after multiple pops', () => {
      stack.pop();
      stack.pop();

      expect(stack.top).toBeFalsy();
    })

    test('Peek the next item on the stack', () => {
      stack.push(1);

      expect(stack.top).toBeTruthy();
      expect(stack.top.value).toEqual(1);
      expect(stack.peek()).toEqual(1);
    })

    test('Instantiate an empty stack', () => {
      let emptyStack = new Stack();

      expect(emptyStack.top).toBeNull();
    })

    test('Calling pop or peek on empty stack raises exception', () => {
      let emptyStack = new Stack();

      expect(emptyStack.pop()).toEqual('The stack is empty -- nothing to remove!');
      expect(emptyStack.peek()).toEqual('The stack is empty -- no value to return!');
    })
  })

  describe('Queue testing', () => {

    let queue = new Queue();

    test('Enqueue into a queue', () => {
      queue.enqueue(1);

      expect(queue.front).toBeTruthy();
      expect(queue.back).toBeTruthy();
      expect(queue.front.value).toEqual(1);
      expect(queue.back.value).toEqual(1);
    })

    test('Enqueue multiple values into a queue', () => {
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.front).toBeTruthy();
      expect(queue.front.next).toBeTruthy();
      expect(queue.front.next.next).toBeTruthy();
      expect(queue.front.value).toEqual(1);
      expect(queue.front.next.value).toEqual(2);
      expect(queue.front.next.next.value).toEqual(3);
    })

    test('Dequeue out of a queue the expected value', () => {
      queue.dequeue();

      expect(queue.front).toBeTruthy();
      expect(queue.front.next).toBeTruthy();
      expect(queue.front.value).toEqual(2);
      expect(queue.front.next.value).toEqual(3);
    })

    test('Peek into a queue, seeing the expected value', () => {
      expect(queue.peek()).toEqual(2);
    })

    test('Empty a queue after multiple dequeuese', () => {
      queue.dequeue();
      queue.dequeue();

      expect(queue.front).toBeFalsy();
    })

    test('Instantiate an empty queue', () => {
      let emptyQueue = new Queue();
    })

    test('Calling dequeue or peek on empty queue raises exception', () => {
      expect(queue.dequeue()).toEqual('The queue is empty -- nothing to remove!');
      expect(queue.peek()).toEqual('The queue is empty -- no value to return!');
    })

  })
})
