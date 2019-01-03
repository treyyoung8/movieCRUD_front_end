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
                <div className='form-group'>
                    <img src={props.oneMovie.poster_url} alt='Movie Poster' />
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control form-control-lg" placeholder={props.oneMovie.title} />
                </div>
                <div className="form-group">
                    <label>Director</label>
                    <input type="text" className="form-control form-control-lg" placeholder={props.oneMovie.director} />
                </div>
                <div className="form-group">
                    <label>Year</label>
                    <input type="text" className="form-control form-control-lg" placeholder={props.oneMovie.year} />
                </div>
                <div className="form-group">
                    <label>Poster URL</label>
                    <input type="text" className="form-control form-control-lg" placeholder={props.oneMovie.poster_url} />
                </div>
                <div className="form-group">
                    <label>Select Rating</label>
                    <select multiple className="form-control form-control-lg">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default EditPage