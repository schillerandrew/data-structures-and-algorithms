'use strict';

let { AnimalShelter } = require ('../stack-queue-animal-shelter');

describe('AnimalShelter testing (\'cat\' or \'dog\')', () => {
  let shelter = new AnimalShelter();

  test('Error out when attempting to dequeue an empty queue', () => {
    shelter.dequeue();

    expect(shelter.dequeue()).toEqual('The queue is empty -- nothing to dequeue.');
  })

  test('Enqueue a cat', () => {
    shelter.enqueue('Mo', 'cat');

    expect(shelter.front.value).toEqual('Mo');
    expect(shelter.front.type).toEqual('cat');
  })

  test('Enqueue a dog', () => {
    shelter.enqueue('Clifford', 'dog');

    expect(shelter.front.next.value).toEqual('Clifford');
    expect(shelter.front.next.type).toEqual('dog');
  })

  test(`Receive the value -null- when attempting to dequeue neither a cat nor a dog`, () => {
    shelter.dequeue('fish');

    expect(shelter.dequeue('fish')).toBe(null);
  })

  test('Dequeue a non-front value', () => {
    expect(shelter.dequeue('dog')).toEqual('Clifford');
  })

  test('Dequeue a front value', () => {
    expect(shelter.dequeue('cat')).toEqual('Mo');
  })
})
