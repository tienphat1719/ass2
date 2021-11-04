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
                <Link to='/manager/home'>
                    Home
                </Link>     
        
                <Link to='/manager/employee'>
                    Employee
                </Link>
                
                <Link to='/manager/department'>
                    Department
                </Link>

                <Link to='/manager/medication'>
                    Medication
                </Link>

                <Link to='/manager/patient'>
                    Patient
                </Link>

                <button onClick={logOut}>log out</button>
            </ul>

    )
}

export default Nav