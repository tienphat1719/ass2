import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './manager_home.css'

const ManagerHome = () => {

    const [userID, setUserID] = useState('')
    const [password, setPassword] = useState('')

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
        // <div className='home'>
        //     <h2>Dont want to work alone ?</h2>
        //     <input type="text" placeholder="Username" onChange={(e) => {setUserID(e.target.value)}}/>
        //     <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                
        //     <div>
        //         <button onClick={() => {}}>ADD</button>
        //     </div>
        //     <Switch>
        //         <Route>
                    
        //         </Route>
        //     </Switch>
        // </div>
    )
}

export default ManagerHome