export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload];

    case '[TODO] Delete Todo':
      return initialState.filter((f) => f.id !== action.payload);

    case '[TODO], Toggle Todo':
      return initialState.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      });

    default:
      return initialState;
  }
};
