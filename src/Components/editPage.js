import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

class EditPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: props.oneMovie,
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    patchMovieInfo = (id) => {
        var movieInfo = {
            title: this.state.title,
            director: this.state.director,
            year: this.state.year,
            rating: this.state.rating,
            poster_url: this.state.poster_url
        }
    
        fetch(`https://treymoviecrudbackend.herokuapp.com/movies/${id}`, {
            method: 'PUT',
            body: JSON.stringify(movieInfo),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; charset=utf - 8'
            }
        })
            .then(alert('Confirmed!'))
    }

    render() {
        return (
            <div className='edit'>
                <form className='editForm'>
                    <div className='form-group'>
                        <img src={this.state.movie.poster_url} alt='Movie Poster' />
                    </div>
                    <div className='form-group'>
                        <label className='left'>Title</label>
                        <input type='text' className='form-control form-control-lg right' placeholder={this.state.movie.title} onChange={(e) => this.handleChange(e)} name='title'/>
                    </div>
                    <div className='form-group'>
                        <label className='left'>Director</label>
                        <input type='text' className='form-control form-control-lg right' placeholder={this.state.movie.director} onChange={(e) => this.handleChange(e)} name='director'/>
                    </div>
                    <div className='form-group'>
                        <label className='left'>Year</label>
                        <input type='text' className='form-control form-control-lg right' placeholder={this.state.movie.year} onChange={(e) => this.handleChange(e)} name='year' />
                    </div>
                    <div className='form-group'>
                        <label className='left'>Poster URL</label>
                        <input type='text' className='form-control form-control-lg right' placeholder={this.state.movie.poster_url} onChange={(e) => this.handleChange(e)} name='poster' />
                    </div>
                    <div className='form-group'>
                        <label className='left'>Select Rating</label>
                        <select multiple className='form-control form-control-sm' name='rating' onChange={(e) => this.handleChange(e)}>
                            <option>Please Pick a Number</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div>
                        <button onClick={(id) => this.patchMovieInfo(this.state.movie.id)}>Confirm</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditPage