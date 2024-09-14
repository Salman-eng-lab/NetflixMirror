import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    activeMovieIndex:0
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingMoviesTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    changeMovieIndex: (state, action) => {
        state.activeMovieIndex = action.payload;
      },
  },
});

export const {
  addNowPlayingMovies,
  addNowPlayingMoviesTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies
} = moviesSlice.actions;

export default moviesSlice.reducer;
