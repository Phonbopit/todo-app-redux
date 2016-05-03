import { expect } from 'chai';
import todos from '../../reducers/todos';

describe('Todo Reducers', () => {
  it('should have default state', () => {
    expect(
      todos(undefined, {})
    ).to.equal([]);
  });
});
