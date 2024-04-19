import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
    
  name: 'user',
  initialState,
  reducers: {
    signStart: (state) => {
      state.loading = true;
    },
    signSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    updateUserFailure: (state) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart: (state) => {
        state.loading = true;
      },
      deleteUserSuccess: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = false;
      },
      deleteUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  },
});

export const {
  signStart,
  signSuccess,
  signFailure,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;