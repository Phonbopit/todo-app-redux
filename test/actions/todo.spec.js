import { expect } from 'chai';
import { addTodo } from '../../actions/todos';

describe('Todo Actions', () => {

  it('addTodo() should create ADD_TODO action', () => {
    expect(addTodo('Setup React')).to.equal({
      type: 'ADD_TODO',
      id: 0,
      text: 'Setup React'
    });
  });
})
