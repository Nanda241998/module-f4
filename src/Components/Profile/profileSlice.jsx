// This slice is for the profile slice of the store which stores the data of the user authenticated.
// It has two reducer functions one to add to the profile data and other to remove the profile data

import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  profileUserData: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfileData: (state, action) => {
      state.profileUserData = action.payload;
    },
    removeProfileData: (state, action) => {
      state.profileUserData = action.payload;
    },
  },
});

export const { addProfileData, removeProfileData } = profileSlice.actions;
export default profileSlice.reducer;
export const profileUserDataSelector = (state) => state.profileUserData;