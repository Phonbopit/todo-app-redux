import { expect } from 'chai';
import todos from '../../reducers/todos';
import { combineReducers } from 'redux';

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

  it('create store with combineReducers should return function', () => {

    let todoApp = combineReducers({
      todos
    });

    expect(todoApp).to.be.a('function');
  });

  it('should handle TOGGLE_TODO', () => {

    expect(
      todos([
        {
          text: 'Good Morning',
          completed: false,
          id: 0
        },
        {
          text: 'Good Afternoon',
          completed: true,
          id: 1
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 1
      })
    ).to.eql([
      {
        text: 'Good Morning',
        completed: false,
        id: 0
      },
      {
        text: 'Good Afternoon',
        completed: false,
        id: 1
      }
    ])
  });
});
