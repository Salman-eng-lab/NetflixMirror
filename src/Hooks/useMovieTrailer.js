import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMoviesTrailer } from "../Store/Slices/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
    const dispatch= useDispatch();
    const movies=useSelector((state) => state.moviesList);
    console.log(movies,'movies')
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGQ0ZGE2M2RmYTdkY2Y5MTAwNWM2NTFjNGM0MjI4NCIsIm5iZiI6MTcyNjE1NDI4OS4xMDE2MzEsInN1YiI6IjY2ZTJjNzkzOTAxM2ZlODcyMjIzODRlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ePsUf9KJN3Uzla-KzvjglUOHuzFTqHCHJeL83jc5pvI'
        }
      };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
       let filterdTrailer=response?.results?.filter((item)=> item?.type=="Trailer")
        dispatch(addNowPlayingMoviesTrailer(filterdTrailer[0]))
      })
      .catch((err) => console.error(err));
  }, []);
};

export default useMovieTrailer;
