import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header>
        <h1>MOVIES!!!!!!</h1>
        <Link to=''>
            <button className='nav'>Home</button>
        </Link>
        <Link to='/index'>
            <button className='nav'>Movie List</button>
        </Link>
    </header>
    )
}

export default Header