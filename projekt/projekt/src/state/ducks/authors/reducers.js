import types from "./types";

const authorsFilter = (state = {}, action) => {
  switch (action.type) {
    case types.SET_AUTHORS_FILTER:
      return {
        text: action.payload.text,
        sortBy: action.payload.sortBy
      }
    default:
      return state;
  }
}

const authorsReducer = { authorsFilter };

export default authorsReducer;
