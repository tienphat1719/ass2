import React from 'react'
import { Link } from 'react-router-dom'

const UserHome = () => {

    return(
        <div className='home'>
            <div className = 'userTagAdd'>
                <Link className='nav-links' to='/manager/user/add'>
                    Add
                </Link>
            </div>
        </div>
    )
}

export default UserHome