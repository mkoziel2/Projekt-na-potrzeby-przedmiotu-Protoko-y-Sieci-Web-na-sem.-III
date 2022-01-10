import types from "./types";

const quizProps = (state = {}, action) => {
  switch (action.type) {
    case types.SET_QUIZ_PROPS:
        let tmp = [];
        
        
        return {
            difficulty: action.payload.difficulty,
            categories: action.payload.categories
        }

    default:
      return state;
  }
}

const quizReducers = { quizProps };

export default quizReducers;



