import { addNowPlayingMovies, addNowPlayingMoviesTrailer, addPopularMovies, addTopRatedMovies, addUpComingMovies } from "../Store/Slices/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { apiGet } from "../utils/utils";
import { GET_MOVIES_TRAILER, GET_NOW_PAYING_MOVIES, GET_POPULAR_MOVIES, GET_TOP_RATTED_MOVIES, GET_UP_COMING_MOVIES } from "./apis";

export const onGetNowPlayingMovies = (dispatch) => {
  return new Promise((resolve, reject) => {
    apiGet(`${GET_NOW_PAYING_MOVIES}`,{},API_OPTIONS)
      .then((res) => {
        dispatch(addNowPlayingMovies(res.results));
        onGetMovieTrailer(dispatch,res?.results[0].id)
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

export const onGetMovieTrailer = (dispatch,id) => {
  return new Promise((resolve, reject) => {
    apiGet(`${GET_MOVIES_TRAILER}${id}/videos`,{},API_OPTIONS)
      .then((res) => {
        let filterdTrailer=res?.results?.filter((item)=> item?.type=="Trailer")
        dispatch(addNowPlayingMoviesTrailer(filterdTrailer[0]))
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

