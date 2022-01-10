import { createAction } from 'redux-api-middleware';
import types from './types'
import { normalize, schema } from 'normalizr';

const authorSchema = new schema.Entity('authors');

const authorsSchema = new schema.Array(authorSchema);

const getAuthors = () => (dispatch) => dispatch(createAction({
    endpoint: 'http://localhost:3210/authors',
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    types: [
      types.AUTHORS_REQUEST,
      {
        type: types.AUTHORS_SUCCESS,
        payload: async (action, state, res) => {
          const json = await res.json();
          const { entities } = normalize(json, authorsSchema);
          return entities;
        },
        meta: { actionType: 'GET_ALL' }
      },
      types.AUTHORS_FAILURE],
  }));
  

const postAuthor = (body) => (dispatch) => dispatch(createAction({
    endpoint: 'http://localhost:3210/authors',
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
            const { entities } = normalize(tmp, authorSchema);
            return entities;
        },
        meta: { actionType: 'ADD_ONE' }
    },
        types.POST_FAILURE
    ]
}));

const deleteAuthor = (id) => (dispatch) => dispatch(createAction({
    endpoint: `http://localhost:3210/authors/${id}`,
    method: 'DELETE',
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
    },
    types: [
        types.DELETE_REQUEST,
        {type: types.DELETE_SUCCESS, payload: () => {
            let tmp = {id: id};
            const { entities } = normalize(tmp, authorSchema);
            return entities;
        },
        meta: { actionType: 'DELETE_ONE' }
    },
        types.DELETE_FAILURE
    ]
}));

const putAuthor = (body, id) => (dispatch) => dispatch(createAction({
    endpoint: `http://localhost:3210/authors/${id}`,
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
            const { entities } = normalize(tmp, authorSchema);
            return entities;
        },
        meta: { actionType: 'PUT_ONE' }
    },
        types.PUT_FAILURE
    ]
}));

const operations = {
    getAuthors,
    postAuthor,
    deleteAuthor,
    putAuthor
};

export default operations;