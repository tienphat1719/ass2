import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import './nav.css'
const Nav = () => {
    const history = useHistory()

    const logOut = () => {
        localStorage.removeItem('accessToken')
        history.replace('/')
    }
    
    return(
        <div className='navBar'>
            <Link className='nav-links' to='/manager/home'>
                Home
            </Link>     

            {/* <Link className='nav-links' to='/manager/patient'>
                Patient
            </Link> */}

            <button className='logout' onClick={logOut}>log out</button>
        </div>
    )
}

export default Nav