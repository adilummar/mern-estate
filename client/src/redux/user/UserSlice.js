import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    singInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart:(state)=>{
      state.loading = true;
    },
    updateUserSuccess:(state,action)=>{
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailed:(state,action)=>{
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart:(state)=>{
      state.loading = true;
    },
    deleteUserSuccess:(state)=>{
      state.currentUser = null;
      state.loading = false;
      state.error = null
    },
    deleteUserFailiur:(state,action)=>{
      state.error = action.payload;
      state.loading = false;
    },
    signOutStart:(state)=>{
      state.loading = true;
    }, 
    signOutSuccess:(state,action)=>{
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signOutFailure:(state,action)=>{
      state.error = action.payload;
      state.loading= false
    }
  },
});


export const{ signInStart,signInSuccess,singInFailure, updateUserStart, updateUserSuccess, updateUserFailed, deleteUserFailiur, deleteUserStart, deleteUserSuccess, signOutFailure, signOutStart, signOutSuccess} = userSlice.actions;

export default userSlice.reducer;