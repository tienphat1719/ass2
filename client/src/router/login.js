import './login.css';
import { useHistory } from "react-router-dom"
import React, {useState, useEffect} from 'react'

const Login = () => {
    let history = useHistory()

    const [userID, setUserID] = useState('')
    const [password, setPassword] = useState('')
    
    const [flag, setFlag] = useState(false)

    return (
        <div className="LoginForm">
            {
                !flag && (
                    <div className="Login">
                        <h1>Hospital</h1>
                        <input type="text" placeholder="Username" onChange={(e) => {setUserID(e.target.value)}}/>
                        <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                        
                        <div className="setFlag">
                            <b>New user?   </b>
                            <a onClick={() => {setFlag(true)}}>Register here</a>
                        </div>

                        <button>LOGIN</button>
                    </div>)
            }

            {
                flag && (
                    <div className="Login">

                        <h1>Hospital</h1>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Comfirm password" />
                        
                        <div className="setFlag">
                            <b>Already have an account?  </b>
                            <a onClick={() => {setFlag(false)}}>Login</a>
                        </div>

                        <button>SIGN UP</button>
                    </div>)
            }
        </div>
    );
}

export default Login
