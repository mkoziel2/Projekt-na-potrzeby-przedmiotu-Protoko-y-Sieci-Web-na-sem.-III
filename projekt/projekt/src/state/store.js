import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { createMiddleware } from 'redux-api-middleware';
import entitiesReducers from './ducks/entities';
import authorsReducer from './ducks/authors/reducers';
import questionsReducers from './ducks/questions/reducers';
import quizReducers from './ducks/quiz/reducers';

const rootReducer = combineReducers({...entitiesReducers, ...authorsReducer, ...questionsReducers, ...quizReducers});
const store = createStore(rootReducer, applyMiddleware(thunk, createMiddleware(), logger));

export default store;
