import React from 'react'
import useMovieTrailer from '../../Hooks/useMovieTrailer'
import { useSelector } from 'react-redux'

const VideoPlayingBackground = ({movieId}) => {
    useMovieTrailer(movieId)
    const { movieTrailer, nowPlayingMovies } = useSelector(
        (state) => state.moviesList
      );
      if(!movieTrailer) return null
  return (
    <div>
      <iframe
        className="w-screen aspect-video absolute"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&mute=1&si=dK1cz33Ceo6LKgsF`}
        title="YouTube video player"
        frameborder="0"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}

export default VideoPlayingBackground
