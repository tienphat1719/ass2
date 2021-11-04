import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'

const Nav = () => {
    const history = useHistory()

    const logOut = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('token')
        history.replace('/')
    }
    
    return(
            <ul>
                <Link to='/patient/home'>
                    Home
                </Link>
                
                <button onClick={logOut}>log out</button>
            </ul>

    )
}

export default Nav