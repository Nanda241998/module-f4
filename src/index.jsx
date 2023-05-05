// We are using the hash router instead of browser router because it is not supported by
// Github pages. There are two routes the Login page which is the landing page and the
// Profile page which will be navigated after the success full authentication

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./app/store.js";
import { Provider } from "react-redux";
import {
  createHashRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./Components/Error/error.jsx";
import Login from "./Components/Login/login.jsx";
import Profile from "./Components/Profile/profile.jsx";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Login />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);