// import React from 'react'
import { useLocation } from 'react-router'
import { movies } from '../data/movies'

const MovieDetailPages = () => {
    const location = useLocation()
    const idMovies = location.pathname.split('/')[2]
    const currentMovie = movies[+idMovies-1]
  return (
    <div>
        <img src={currentMovie.image} alt="" />
        <p className='text-2xl font-bold text-center'>{ currentMovie.title }</p>
    </div>
  )
}

export default MovieDetailPages
