import React from 'react'

const CreateMovie = (props) => {
    return (
        <div className='edit'>
            <form className='editForm'>
                <div className='form-group'>
                    <label className='left'>Title</label>
                    <input type='text' className='form-control form-control-lg right' placeholder='Title' onChange={(e) => props.handleChange(e)} name='title'/>
                </div>
                <div className='form-group'>
                    <label className='left'>Director</label>
                    <input type='text' className='form-control form-control-lg right' placeholder='Director' onChange={(e) => props.handleChange(e)} name='director'/>
                </div>
                <div className='form-group'>
                    <label className='left'>Year</label>
                    <input type='text' className='form-control form-control-lg right' placeholder='Year' onChange={(e) => props.handleChange(e)} name='year' />
                </div>
                <div className='form-group'>
                    <label className='left'>Poster URL</label>
                    <input type='text' className='form-control form-control-lg right' placeholder='Poster URL' onChange={(e) => props.handleChange(e)} name='poster' />
                </div>
                <div className='form-group'>
                    <label className='left'>Select Rating</label>
                    <select multiple className='form-control form-control-sm' name='rating' onChange={(e) => props.handleChange(e)}>
                        <option>Please Pick a Number</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div>
                    <button onClick={() => props.post()}>Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default CreateMovie