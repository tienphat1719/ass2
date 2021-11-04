import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const ManagerEmployee = () => {
    const [patientList, setPaList] = useState([])

    // useEffect(() => {
    //     Axios.get('http://localhost:3001/api/employee/get').then((res) => {
    //     setPaList(res.data)
    //     })
    // }, [])

    // const deleteButton = (P_code) => {
    //     Axios.delete(`http://localhost:3001/api/employee/delete/${P_code}`).then(() => {alert('del success')})
    // }

    // const updateButton = (P_code) => {
    //     Axios.put('http://localhost:3001/api/employee/update', {
    //     P_code: P_code,
    //     P_lname: newLname,

    //     }).then(() => {alert('update success')})
    // }

    return(
        <div>
            This is manager user interact with employee
        

            {/* {patientList.map((val) => {
            return (
              <div>
                <h1>patient: {val.P_code}, name: {val.P_lname}</h1>
                <button onClick = {() => {deleteButton(val.P_code)}}>Delete</button>
                <input type='text' onChange = {(e) => {setNewLname(e.target.value)}}/>
                <button onClick = {() => {updateButton(val.P_code)}}>Update</button>
              </div>
            )
          })} */}

        </div>
    )
}

export default ManagerEmployee