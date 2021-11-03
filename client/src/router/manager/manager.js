import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from "react-router-dom"
import Axios from 'axios'

const Manager = ({authorized}) => {
    const [code, setCode] = useState()
    const [lname, setLname] = useState('')
    
    const [newLname, setNewLname] = useState('')

    const [patientList, setPaList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/patient/get').then((res) => {
        setPaList(res.data)
        })
    }, [])

    const submitForm = () => {
        Axios.post('http://localhost:3001/api/patient/insert', {
        P_code: code,
        P_lname: lname,

        }).then(() => {alert('ins success')})
    }

    const deleteButton = (P_code) => {
        Axios.delete(`http://localhost:3001/api/patient/delete/${P_code}`).then(() => {alert('del success')})
    }

    const updateButton = (P_code) => {
        Axios.put('http://localhost:3001/api/patient/update', {
        P_code: P_code,
        P_lname: newLname,

        }).then(() => {alert('update success')})
    }

    if(authorized !== 1){
        return <Redirect to='/login'/>
    }
    return(
      <Router>
        <div>
          <Switch>
            <Route path='/user/manager'/>
            <Route path='/user/manager/employee'/>
            <Route path='/user/manager/medication'/>
          </Switch>
        </div>
      </Router>
      // <div className="App">
      //   <h1>Hospital App</h1>
      //   <h2>Insert employee</h2>
      //   <div  className="form">
      //     <label>Code</label>
      //     <input type='text' onChange = {(e) => {setCode(e.target.value)}}/>

      //     <label>Last Name</label>
      //     <input type='text' onChange = {(e) => {setLname(e.target.value)}}/>

          

      //     <button onClick={submitForm}>Submit</button>

    
      //     {patientList.map((val) => {
      //       return (
      //         <div>
      //           <h1>patient: {val.P_code}, name: {val.P_lname}</h1>
      //           <button onClick = {() => {deleteButton(val.P_code)}}>Delete</button>
      //           <input type='text' onChange = {(e) => {setNewLname(e.target.value)}}/>
      //           <button onClick = {() => {updateButton(val.P_code)}}>Update</button>
      //         </div>
      //       )
      //     })}

      //   </div>
      // </div>    
    )
}

export default Manager