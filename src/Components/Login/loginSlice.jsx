// This slice is used to manage the login slice of the store.
// It has two reducers one to save the authenticated user login data and one to remove the login data

import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userId: -1,
  loginUserData: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addLoginData: (state, action) => {
      state.userId = action.payload.id;
      state.loginUserData = action.payload.loginData;
    },
    removeLoginData: (state) => {
      state.userId = -1;
      state.loginUserData = null;
    },
  },
});

export const { addLoginData, removeLoginData } = loginSlice.actions;
export default loginSlice.reducer;