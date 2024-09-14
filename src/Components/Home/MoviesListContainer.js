import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const MoviesListContainer = () => {
    const movies=useSelector((state) => state.moviesList)
  return (
    <div className='bg-black'>
        <div className='-mt-32 relative'>
        <MoviesList title={'Now Playing Movies'} data={movies?.nowPlayingMovies}/>
        <MoviesList title={'Popular Movies'} data={movies?.popularMovies}/>
        <MoviesList title={'Top Rated Movies'} data={movies?.topRatedMovies}/>
        <MoviesList title={'Upcoming Movies'} data={movies?.upComingMovies}/>
        </div>
    </div>
  )
}

export default MoviesListContainer
