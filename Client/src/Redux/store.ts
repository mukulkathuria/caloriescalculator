import { applyMiddleware, combineReducers, createStore } from 'redux';
import { userReducer } from './Reducers/userreducer';
import { caloryReducer } from './Reducers/caloriesReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducers = combineReducers({
  userReducer,
  caloryReducer
});

const middlewars = [];

if (process.env.NODE_ENV === 'development') {
  middlewars.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewars, thunk));

export default store;
