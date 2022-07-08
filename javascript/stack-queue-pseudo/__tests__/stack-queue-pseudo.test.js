'use strict';

let { PseudoQueue } = require('../stack-queue-pseudo');

describe('PseudoQueue (2 stacks as 1 queue) testing', () => {
  let queue = new PseudoQueue();

  test('Enqueue successfully', () => {
    queue.enqueue(1);

    expect(queue.inputStack.top.value).toEqual(1);
  })

  test('Dequeue successfully', () => {
    queue.enqueue(1);
    queue.dequeue();

    expect(queue.dequeue()).toEqual(1);
  })

  test('Enqueue and dequeue even when alternating between methods', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);

    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(2);

    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.dequeue()).toEqual(3);
  })

  test('Dequeue errors out when queue is empty', () => {
    queue.dequeue();
    queue.dequeue();

    expect(queue.dequeue()).toEqual('There is nothing to dequeue.');
  })
})
