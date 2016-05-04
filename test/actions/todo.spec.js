import { expect } from 'chai';
import { addTodo, toggleTodo } from '../../actions/todos';

describe('Todo Actions', () => {

  it('addTodo() should create ADD_TODO action', () => {
    expect(addTodo('Setup React')).to.deep.equal({
      type: 'ADD_TODO',
      id: 0,
      text: 'Setup React'
    });
  });

  it('toggleTodo() should create TOGGLE_TODO action', () => {
    expect(toggleTodo(2)).to.eql({
      type: 'TOGGLE_TODO',
      id: 2
    })
  });
});
