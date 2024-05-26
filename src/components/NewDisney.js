import React from 'react'
import './Recommends.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNewDisney, } from '../features/movie/movieSlice'
const NewDisney = () => {
    const movies = useSelector(selectNewDisney);

    return (
        <div className='recommends'>
            <h4>New to Disney+</h4>
            <div className='recommends__content'>
                {
                    movies && movies.map((movie, key) => (
                        <div className='recommends__images' key={key}>
                            {movie.id}
                            <Link to={`/detail/` + movie.id}>
                                <img className='recommends__img' src={movie.cardImg} alt={movie.title} />

                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NewDisney