import React from 'react';

const IndexPage = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
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
                            <th>{movie.title}</th>
                            <th>{movie.director}</th>
                            <th>{movie.year}</th>
                            <th>{movie.rating}</th>
                            <th>
                                <button>Edit</button>
                            </th>
                            <th>
                                <button>Delete</button>
                            </th>
                        </tr>)}
                    </tbody>
            </table>
        </div>
    )
}

export default IndexPage;