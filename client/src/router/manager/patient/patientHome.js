import React from 'react'
import { Link } from 'react-router-dom'

const PatientHome = () => {

    return(
        <div className='home'>
            <div className = 'patientTagAdd'>
                <Link className='nav-links' to='/manager/patient/add'>
                    Add
                </Link>
            </div>

            <div className = 'patientTagSearch'>
                <Link className='nav-links' to='/manager/patient/search'>
                    Search
                </Link>
            </div>
        </div>
    )
}

export default PatientHome