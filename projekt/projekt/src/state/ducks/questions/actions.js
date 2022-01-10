import types from "./types";

const sendFilters = (x) => ({
  type: types.SET_QUESTIONS_FILTER,
  payload: x
});


const actions = {sendFilters};

export default actions;
