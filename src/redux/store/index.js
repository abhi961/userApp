import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
 import {logger} from 'redux-logger'
import AuthReducer from '../reducer/AuthReducer';
import GetUserReducer from '../reducer/GetUserReducer';
import rootSaga from '../saga/rootSaga';

let sagaMiddleware = createSagaMiddleware();
const middlewareSaga = [sagaMiddleware, logger];

const reducer = combineReducers({
  AuthReducer: AuthReducer,
  GetUserReducer:GetUserReducer
});

export default configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewareSaga),
});

sagaMiddleware.run(rootSaga);
