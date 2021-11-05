import React from 'react'
import { Link } from 'react-router-dom'

import './manager_home.css'

const ManagerHome = () => {
    return(
        <div className='home'>
            <div className = 'userTag'>
                <Link className='nav-links' to='/manager/user'>
                    User
                </Link>
            </div>

            <div className = 'patientTag'>
                <Link className='nav-links' to='/manager/patient'>
                    Patient
                </Link>
            </div>
        </div>
    )
}

export default ManagerHome