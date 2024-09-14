import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Store/Slices/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular`,
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch(addPopularMovies(response?.results));
      })
      .catch((err) => console.error(err));
  }, []);
};

export default usePopularMovies;
