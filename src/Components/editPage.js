import React from 'react'
// import { Link } from 'react-router-dom';

const EditPage = (props) => {

    return (
        // <div className='movieCard'>
        //     <div className='card'>
        //         <img className='card-img-top' src={props.oneMovie.poster_url} alt='Card image cap' />
        //         <div className='card-body'>
        //             <h5 className='card-title'>{props.oneMovie.title}</h5>
        //             <input>Director: {props.oneMovie.director}</input>
        //             <input>Year: {props.oneMovie.year}</input>
        //             <input>Rating: {props.oneMovie.rating}</input>
        //             <input>Poster URL: </input>
        //             <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //             <a className='btn btn-primary'>Go somewhere</a>
        //         </div>
        //         </div>
        // </div>
        <div className='edit'>
            <form className='editForm'>
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" placeholder={props.oneMovie.title} />
                </div>
                <div class="form-group">
                    <label>Director</label>
                    <input type="text" class="form-control" placeholder={props.oneMovie.director} />
                </div>
                <div class="form-group">
                    <label>Year</label>
                    <input type="text" class="form-control" placeholder={props.oneMovie.year} />
                </div>
            </form>
        </div>
    )
}

export default EditPage