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

    // state = 1 todo
    expect(
      todos([
        {
          id: 0,
          text: 'Learn React',
          completed: false
        }
      ], {
        type: 'ADD_TODO',
        text: 'Learn Redux',
        id: 1
      })
    ).to.eql([
      {
        id: 0,
        text: 'Learn React',
        completed: false
      },
      {
        id: 1,
        text: 'Learn Redux',
        completed: false
      }
    ]);

    // state = 2 todos
    expect(
      todos([{
        id: 0,
        text: 'Learn React',
        completed: false
      }, {
        id: 1,
        text: 'Learn Redux',
        completed: false
      }], {
        type: 'ADD_TODO',
        id: 2,
        text: 'Learn Mocha'
      })
    ).to.eql([
      {
        id: 0,
        text: 'Learn React',
        completed: false
      },
      {
        id: 1,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 2,
        text: 'Learn Mocha',
        completed: false
      }
    ]);

  });
});
