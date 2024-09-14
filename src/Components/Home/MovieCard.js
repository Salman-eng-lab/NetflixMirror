import React from 'react'

const MovieCard = ({item}) => {
  return (
    <div className='w-48'>
      <img className='w-48' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt='moviePoster'/>
    </div>
  )
}

export default MovieCard
