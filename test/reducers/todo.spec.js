import { expect } from 'chai';
import todos from '../../reducers/todos';

describe('Todo Reducers', () => {
  it('should have default state', () => {
    expect(
      todos(undefined, {})
    ).to.eql([]);
  });

  it('should handle ADD_TODO', () => {

    // empty todo, state = []
    expect(
      todos([], {
        type: 'ADD_TODO',
        text: 'Learn React',
        id: 0
      })
    ).to.eql([
      {
        id: 0,
        text: 'Learn React',
        completed: false
      }
    ]);

  });
});
