import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetNowPlayingMovies, onGetPopularMovies, onGetTopRattedMovies, onGetUpcomingMovies } from "../../NetworkLayer/apiServices";
import Header from "../Header/Header";
import MoviesListContainer from "./MoviesListContainer";
import VideoInfoCard from "./VideoInfoCard";
import VideoPlayingBackground from "./VideoPlayingBackground";

const Home = () => {
  const dispatch = useDispatch();
  const {nowPlayingMovies } = useSelector(
    (state) => state.moviesList
  );
  useEffect(() => {
    (async () => {
      await onGetNowPlayingMovies(dispatch);
      await onGetPopularMovies(dispatch);
      await onGetTopRattedMovies(dispatch);
      await onGetUpcomingMovies(dispatch);
    })();
  }, []);

  if (!nowPlayingMovies) return null;
  const { original_title, overview, id } = nowPlayingMovies[0];
  return (
    <div>
      <div className="aspect-video">
        <Header />
        <VideoPlayingBackground movieId={id} />
        {/* <VideoInfoCard title={original_title} overview={overview} /> */}
      </div>
      <div>
        <MoviesListContainer />
      </div>
    </div>
  );
};

export default Home;
