import './login.css';
import { useHistory } from "react-router-dom"
import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const Login = () => {
    let history = useHistory()

    const [flag, setFlag] = useState(false)

    //Login
    const [userID, setUserID] = useState('')
    const [password, setPassword] = useState('')
    
    //Signup
    const [confirmPass, setConfirmPass] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [DD, setDD] = useState('')
    const [MM, setMM] = useState('')
    const [YYYY, setYYYY] = useState('')
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState('')
    const [type, setType] = useState('')

    const authLogin = (userType) => {
        switch (userType) {
            case 1:
                history.push('/user/manager')
                break;
        
            case 2:
                history.push('/user/employee')
                break;

            case 3:
                history.push('/user/patient')
                break;
                
            default:
                break;
        }
    }

    const loginSubmit = () => {
        Axios.get(`http://localhost:3001/api/user/login/`,{
            params:{
                userID: userID,
                password: password
            }
        }).then((res) => console.log(res.data[0].userType))
    }

    const signupSubmit = () => {
        Axios.post('http://localhost:3001/api/user/signup', {
            P_fname: fname,
            P_lname: lname,
            P_dob: YYYY + '-' + MM + '-' + DD,
            P_gender: gender,
            P_phone: phone,

            P_type: type
        }).then(() => {alert('ins success')})
    }

    return (
        <div className="LoginForm">
            {
                !flag && (
                    <div className="Login">
                        <h1>Hospital</h1>
                        <input type="text" placeholder="Username" onChange={(e) => {setUserID(e.target.value)}}/>
                        <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                        
                        <div>
                            <b>New user?   </b>
                            <a  className="setFlag" onClick={() => {setFlag(true)}}>Register here</a>
                        </div>
                        <button onClick={loginSubmit}>LOGIN</button>
                    </div>)
            }

            {
                flag && (
                    <div className="Login">

                        <h1>Hospital</h1>

                        <div>
                            <input className='name' type="text" placeholder="First Name" onChange={(e) => setFname(e.target.value)}/>
                            <input className='name' type="text" placeholder="Last name" onChange={(e) => setLname(e.target.value)}/>
                        </div>

                        <div>
                            <input className='dob' type="number" placeholder="DD" onChange={(e) => setDD(e.target.value)}/>
                            <input className='dob' type="number" placeholder="MM" onChange={(e) => setMM(e.target.value)}/>
                            <input className='dob' type="number" placeholder="YYYY" onChange={(e) => setYYYY(e.target.value)}/>
                        </div>

                        <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
                        
                        <div className='selectBox' onChange={(e) => setType(e.target.value)}>
                            <select>
                                <option>Type of patient?</option>
                                <option value='IP'>Inpatient</option>
                                <option value='OP'>Outpatient</option>
                            </select>

                            <select onChange={(e) => setGender(e.target.value)}>
                                <option>Gender</option>
                                <option value='M'>Male</option>
                                <option value='F'>Female</option>
                                <option value='O'>Other</option>
                            </select>
                        </div>
                        
                        <input type="text" placeholder="Username" onChange={(e) => setUserID(e.target.value)}/>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        <input type="password" placeholder="Comfirm password" onChange={(e) => setConfirmPass(e.target.value)}/>

                        <div>
                            <b>Already have an account?  </b>
                            <a className="setFlag" onClick={() => {setFlag(false)}}>Login</a>
                        </div>

                        <button onClick = {signupSubmit}>SIGN UP</button>
                    </div>)
            }
        </div>
    );
}

export default Login
