import {call, put, takeLatest} from 'redux-saga/effects';
import {
 getMeetingListFailure,
 getMeetingListSucess,
 getMeetingListRequest
} from '../reducer/GetUserReducer';

function fetchMeeting(credentials) {
  const url = 'https://api.hidromas.nl/get-meeting';
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

export function* GetMeetingSaga(action) {
  try {
    const response = yield call(fetchMeeting, action.payload);
    console.log(response, 'meetingList66666666-------->');
    if (response?.status === 0) {
      yield put(getMeetingListSucess(response.data));
      Toast('Meeting List');
    } else {
      yield put(getMeetingListFailure(response));
      //   Toast(response.data.message);
    }
  } catch (error) {
    console.log(error);
    yield put(getMeetingListFailure(error));
    // Toast(error?.response?.data?.message);
  }
}




const watchFunction = [
  (function* () {
    yield takeLatest('user/getMeetingListRequest', GetMeetingSaga);
  })(),
];

export default watchFunction;
