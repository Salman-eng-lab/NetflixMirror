import React from 'react'
import useMovieTrailer from '../../Hooks/useMovieTrailer'
import { useSelector } from 'react-redux'
import ReactPlayer from 'react-player'
const VideoPlayingBackground = ({movieId}) => {
    // useMovieTrailer(movieId)
    const { movieTrailer, nowPlayingMovies } = useSelector(
        (state) => state.moviesList
      );
      if(!movieTrailer) return null
  return (
    <div className='w-screen aspect-video absolute'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${movieTrailer?.key}`}
        muted={true}
        playing={true}
        width={'100%'}
        height={"100%"}
        volume={1}
        />
      {/* <iframe
        className="w-screen aspect-video absolute"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&mute=1&si=dK1cz33Ceo6LKgsF`}
        title="YouTube video player"
        frameborder="0"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe> */}
    </div>
  )
}

export default VideoPlayingBackground
