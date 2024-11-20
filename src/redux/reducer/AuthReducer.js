import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,
  signinResponse:{},
  error: {},
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    signinRequest(state, action) {
      state.status = action.type;
    },
    signinSucess(state, action) {
      state.signinResponse = action.payload;
      state.status = action.type;
    },
    signinFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
  },
});
export const {signinFailure, signinRequest, signinSucess} = AuthSlice.actions;

export default AuthSlice.reducer;
