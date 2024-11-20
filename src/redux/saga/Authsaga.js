import {call, put, takeLatest} from 'redux-saga/effects';
import {
  signinFailure,
  signinRequest,
  signinSucess,
} from '../reducer/AuthReducer';
import Toast from '../../helper/Toast';
import {useEffect} from 'react';

function fetchLogin(credentials) {
  const url = 'https://api.hidromas.nl/user-login';
  const apiKey = 'hidromas-we-app-01~c^Dt0Oc32';

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': apiKey,
    },
    body: JSON.stringify(credentials),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

//meeting list api //

export function* loginSaga(action) {
  try {
    const response = yield call(fetchLogin, action.payload);
    console.log(response, 'response5555');
    if (response?.status === 0) {
      yield put(signinSucess(response.data));
      Toast('Login Successfully');
    } else {
      yield put(signinFailure(response));
      //   Toast(response.data.message);
    }
  } catch (error) {
    console.log(error);
    yield put(signinFailure(error));
    // Toast(error?.response?.data?.message);
  }
}

// get metting List

const watchFunction = [
  (function* () {
    yield takeLatest('Auth/signinRequest', loginSaga);
  })(),
];

export default watchFunction;
