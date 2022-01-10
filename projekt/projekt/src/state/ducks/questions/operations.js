import {createAction} from 'redux-api-middleware';
import types from './types';
import {normalize, schema} from 'normalizr';

const questionSchema = new schema.Entity('questions');
const questionsSchema = new schema.Array(questionSchema);

const getQuestions = () => (dispatch) => dispatch(createAction({
  endpoint: 'http://localhost:3210/questions',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  types: [
    types.QUESTIONS_REQUEST,
    {
      type:  types.QUESTIONS_SUCCESS,
      payload: async (action, state, res) => {
        const json = await res.json();
        const { entities } = normalize(json, questionsSchema);
        return entities;
      },
      meta: { actionType: 'GET_ALL' }
    },
    types.QUESTIONS_FAILURE
  ]
}));

const postQuestion = (body) => (dispatch) => dispatch(createAction({
  endpoint: 'http://localhost:3210/questions',
  method: 'POST',
  body: JSON.stringify({...body}),
  headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
  },
  types: [
      types.POST_REQUEST,
      {type: types.POST_SUCCESS, payload: async (act, st, res) => {
          let obj = await res.json();
          let tmp = {...body, id: obj.id};
          const { entities } = normalize(tmp, questionSchema);
          return entities;
      },
      meta: { actionType: 'ADD_ONE' }
  },
      types.POST_FAILURE
  ]
}));

const deleteQuestion = (id) => (dispatch) => dispatch(createAction({
  endpoint: `http://localhost:3210/questions/${id}`,
  method: 'DELETE',
  headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
  },
  types: [
      types.DELETE_REQUEST,
      {type: types.DELETE_SUCCESS, payload: () => {
          let tmp = {id: id};
          const { entities } = normalize(tmp, questionSchema);
          return entities;
      },
      meta: { actionType: 'DELETE_ONE' }
  },
      types.DELETE_FAILURE
  ]
}));

const putQuestion = (body, id) => (dispatch) => dispatch(createAction({
  endpoint: `http://localhost:3210/questions/${id}`,
  method: 'PUT',
  body: JSON.stringify({...body}),
  headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
  },
  types: [
      types.PUT_REQUEST,
      {type: types.PUT_SUCCESS, payload: () => {
          let tmp = {...body, id: id};
          const { entities } = normalize(tmp, questionSchema);
          return entities;
      },
      meta: { actionType: 'PUT_ONE' }
  },
      types.PUT_FAILURE
  ]
}));


const operations = {
  getQuestions,
  postQuestion,
  deleteQuestion,
  putQuestion
}

export default operations
