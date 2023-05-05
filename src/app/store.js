
// This is the redux toolkit store which store two slices.
// One is the login slice which store the authenticated user id and the fetched authentication details like token.
// Another one is the profile slice which will save the fetched authenticated user data according to the stored id in login slice

import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../Components/Profile/profileSlice";
import loginReducer from "../Components/Login/loginSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
});

export default store;