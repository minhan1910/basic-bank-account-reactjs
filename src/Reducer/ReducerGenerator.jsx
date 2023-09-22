const createReducer = (initialState, actionHandlers) => {
  return (state = initialState, action) => {
    if (actionHandlers[action.type]) {
      return actionHandlers[action.type](state, action);
    }
    return state;
  };
};

export default createReducer;
