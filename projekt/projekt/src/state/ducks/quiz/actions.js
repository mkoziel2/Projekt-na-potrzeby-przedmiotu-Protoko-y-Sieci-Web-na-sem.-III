import types from "./types";

const sendProps = (x) => ({
  type: types.SET_QUIZ_PROPS,
  payload: x
});


const actions = {sendProps};

export default actions;
