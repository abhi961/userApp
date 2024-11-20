import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,
  getUserRes: {},
  getMeetingRes: {},
  error: {},
};

const GetUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserRequest(state, action) {
      state.status = action.type;
    },
    getUserSucess(state, action) {
      state.getUserRes = action.payload;
      state.status = action.type;
    },
    getUserFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    getMeetingListRequest(state, action) {
      state.status = action.type;
    },
    getMeetingListSucess(state, action) {
      state.getMeetingRes = action.payload;
      state.status = action.type;
    },
    getMeetingListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
  },
});
export const {
  getUserFailure,
  getUserRequest,
  getUserSucess,
  getMeetingListFailure,
  getMeetingListRequest,
  getMeetingListSucess,
} = GetUserSlice.actions;

export default GetUserSlice.reducer;
