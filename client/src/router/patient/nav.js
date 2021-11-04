import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import './nav.css'

const Nav = () => {
    const history = useHistory()

    const logOut = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('token')
        history.replace('/')
    }
    
    return(
        <nav>
            <Link to='/patient/home'>
                Home
            </Link>

            <button onClick={logOut}>log out</button>
        </nav>
    )
}

export default Nav