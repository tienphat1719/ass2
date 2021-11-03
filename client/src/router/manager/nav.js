import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <nav>
            <Link to='/user/manager/employee'>
                <li>Employee</li>
            </Link>

            <Link to='/user/manager/medication'>
                <li>Medication</li>
            </Link>
        </nav>
    )
}

export default Nav