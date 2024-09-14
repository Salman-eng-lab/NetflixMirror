import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpComingMovies } from "../Store/Slices/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { apiGet } from "../utils/utils";
import { GET_NOW_PAYING_MOVIES, GET_POPULAR_MOVIES, GET_TOP_RATTED_MOVIES, GET_UP_COMING_MOVIES } from "./apis";

export const onGetNowPlayingMovies = (dispatch) => {
  return new Promise((resolve, reject) => {
    apiGet(`${GET_NOW_PAYING_MOVIES}`,{},API_OPTIONS)
      .then((res) => {
        dispatch(addNowPlayingMovies(res.results));
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const onGetPopularMovies = (dispatch) => {
  return new Promise((resolve, reject) => {
    apiGet(`${GET_POPULAR_MOVIES}`,{},API_OPTIONS)
      .then((res) => {
        dispatch(addPopularMovies(res.results));
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const onGetTopRattedMovies = (dispatch) => {
  return new Promise((resolve, reject) => {
    apiGet(`${GET_TOP_RATTED_MOVIES}`,{},API_OPTIONS)
      .then((res) => {
        dispatch(addTopRatedMovies(res.results));
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const onGetUpcomingMovies = (dispatch) => {
  return new Promise((resolve, reject) => {
    apiGet(`${GET_UP_COMING_MOVIES}`,{},API_OPTIONS)
      .then((res) => {
        dispatch(addUpComingMovies(res.results));
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};