import {all} from 'redux-saga/effects';
import AuthSaga from '../saga/Authsaga'
import GetUserSaga from '../saga/GetUserSaga'

const combinedSaga = [...AuthSaga , ...GetUserSaga];

export default function* rootSaga() {
  yield all(combinedSaga);
}