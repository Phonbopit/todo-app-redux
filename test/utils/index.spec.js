import { expect } from 'chai';

describe('Utils', () => {
  it('should count remaining todos', () => {

    let todos = [
      {
        completed: false
      },
      {
        completed: true
      },
      {
        completed: false
      },
      {
        completed: false
      },
      {
        completed: true
      },
      {
        completed: false
      }
    ];

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    // [].reduce((prev, current, idx, arr) => {});
    let remaining = todos.reduce((count, todo) => {
      return todo.completed ? count : count + 1;
    }, 0);

    expect(remaining).to.equal(4);
  });
})
