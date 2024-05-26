import React from 'react'
import './Recommends.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectRecommend, } from '../features/movie/movieSlice'


const Recommends = () => {
    const movies = useSelector(selectRecommend);
    return (
        <div className='recommends'>
            <h4>Recommended for You</h4>
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

                {/* <div className='recommends__images'>
                    <Link for='/'>
                        <img className='recommends__img' src="https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg" alt="" />
                    </Link>
                </div> */}
                
            </div>
        </div>
    )
}

export default Recommends