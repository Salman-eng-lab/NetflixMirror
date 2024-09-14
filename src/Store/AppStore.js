import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import moviesSlice from "./Slices/moviesSlice";
const store=configureStore({
    reducer: {
        userData:userSlice,
        moviesList:moviesSlice
    }
})

export default store