let currentId = 0;
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: currentId++,
    text
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
};

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}
