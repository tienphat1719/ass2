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
                <li>
                <Link to='/manager'>
                    Home
                </Link>
                </li>

                <li>
                <Link to='/manager/employee'>
                    Employee
                </Link>
                </li>

                <li>
                <Link to='/manager/medication'>
                    medication
                </Link>
                </li>
                <button onClick={logOut}>log out</button>
            </ul>

    )
}

export default Nav