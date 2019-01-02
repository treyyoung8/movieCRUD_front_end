import React from 'react'

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
                                    <button>Edit</button>
                                </th>
                                <th>
                                    <button onClick={() => props.delete(movie.id)}>Delete</button>
                                </th>
                            </tr>)}
                        </tbody>
                </table>
            </div>
        </div>
    )
}

export default IndexPage