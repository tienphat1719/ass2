import React from "react"
import {Switch, Route, Link} from "react-router-dom"

import UserAdd from './userAdd'

const User = () => {
    return (
        <div className='home'>
            <Switch>
                <Route path='/manager/user/'> 
                    <UserAdd />
                </Route>

                <Route path='/manager/user/add'> 
                    <UserAdd />
                </Route>
            </Switch>
        </div>
    )
}

export default User