'use strict'

let { Stack } = require('../stack-queue-brackets');

describe('Stack testing -- validateBrackets method', () => {

  let stack = new Stack();

  test('No-brackets string \'abc\' returns true', () => {
    expect(stack.validateBrackets('abc')).toBe(true);
  })

  test('Balance string \'()[[Extra Characters]]\' returns true', () => {
    expect(stack.validateBrackets('()[[Extra Characters]]')).toBe(true);
  })

  test('Balanced string \'{}()[]\' returns true', () => {
    expect(stack.validateBrackets('{}()[]')).toBe(true);
  })

  test('Unbalanced string \'[({}]\' returns false', () => {
    expect(stack.validateBrackets('[({}]')).toBe(false);
  })

  test('Unbalanced string \']\' returns false', () => {
    expect(stack.validateBrackets(']')).toBe(false);
  })
})
