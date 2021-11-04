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
            <Link className='nav-links' to='/manager/home'>
                Home
            </Link>     
    
            <Link className='nav-links' to='/manager/employee'>
                Employee
            </Link>
            
            <Link className='nav-links' to='/manager/department'>
                Department
            </Link>

            <Link className='nav-links' to='/manager/medication'>
                Medication
            </Link>

            <Link className='nav-links' to='/manager/patient'>
                Patient
            </Link>

            <button className='logout' onClick={logOut}>log out</button>
        
        </nav>
    )
}

export default Nav