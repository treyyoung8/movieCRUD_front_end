import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='homepage'>
            <h2>Welcome to the ULTIMATE MOVIE SITE!</h2>
            <Link to='/movies'>
                <button>See Movies</button>
            </Link>
        </div>
    )
}

export default HomePage