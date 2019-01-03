import React from 'react'
import { Link } from 'react-router-dom'

const IndexPage = (props) => {
    return (
        <div>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>Moive Poster</th>
                            <th>Title</th>
                            <th>Director</th>
                            <th>Year</th>
                            <th>Rating</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.movies.map(movie =>
                            <tr className={movie.id}>
                                <th><img src={movie.poster_url} alt={movie.title} className='poster'/></th>
                                <th>{movie.title}</th>
                                <th>{movie.director}</th>
                                <th>{movie.year}</th>
                                <th>{movie.rating}</th>
                                <th>
                                    <Link to={`movies/${movie.id}`}>
                                        <button onClick={() => props.getMovie(movie.id)}>More Info</button>
                                    </Link>
                                </th>
                                <th>
                                    <button onClick={() => props.delete(movie.id)}>Delete</button>
                                </th>
                            </tr>)}
                        </tbody>
                </table>
            </div>
            <div>
                <button>Create Movie</button>
            </div>
        </div>
    )
}

export default IndexPage