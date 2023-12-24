import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./MoviesSlice/MoviesSlice";
import UserReducer from "./MoviesSlice/UserSlice";
import AuthReducer from "./MoviesSlice/AuthSlice";

const store = configureStore({
  reducer: {
    infoMovies: MoviesReducer,
    userInfo: UserReducer,
    authInfo : AuthReducer
  },
});

export default store;
