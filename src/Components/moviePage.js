import React from 'react'
import { Link } from 'react-router-dom'

const MoviePage = (props) => {
    return (
        <div className='movieCard'>
            <div className='card'>
                <img className='card-img-top' src={props.oneMovie.poster_url} alt='Card image cap' />
                <div className='card-body'>
                    <h5 className='card-title'>{props.oneMovie.title}</h5>
                    <h3>Director: {props.oneMovie.director}</h3>
                    <h3>Year: {props.oneMovie.year}</h3>
                    <h3>Rating: {props.oneMovie.rating}</h3>
                    <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={`${props.oneMovie.id}/edit`}>
                        <a className='btn btn-primary'>Edit</a>
                    </Link>
                </div>
                </div>
        </div>
    )
}

export default MoviePage