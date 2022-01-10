import types from "./types";

const questionsFilter = (state = {}, action) => {
  switch (action.type) {
    case types.SET_QUESTIONS_FILTER:
      return {
        text: action.payload.text,
        sortBy: action.payload.sortBy,
        diff: action.payload.diff
      }
    default:
      return state;
  }
}

const questionsReducers = { questionsFilter };

export default questionsReducers;



