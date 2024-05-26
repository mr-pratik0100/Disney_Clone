import React from 'react'
import './Recommends.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTranding } from '../features/movie/movieSlice'

const Tranding = () => {
    const movies = useSelector(selectTranding);

    return (
        <div className='recommends'>
            <h4>Tranding</h4>
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

export default Tranding