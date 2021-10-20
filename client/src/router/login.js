import { useHistory } from "react-router-dom"
import React, {useState, useEffect} from 'react'

const Login = () => {
    let history = useHistory()

    const [code, setCode] = useState()
    const [lname, setLname] = useState('')
    
    return(
        <div>
            <input type='text' />
            <input type='text' />
            <button onClick = {() => {history.push('/user/manager')}}>login</button>
        </div>
    )
}

export default Login
