import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import Axios from "axios"

const PatientDetail = () => {
    const [Pcode, setPcode] = useState(localStorage.getItem('Pcode'))
    const [patient, setPatient] = useState({
        P_fname: '', P_lname: '',
        P_dob: '', P_gender: '', P_phone: ''
    })
    useEffect(() => {
        Axios.get('http://localhost:3001/api/patient/getOne', {
            params:{
                Pcode: Pcode
            }
        }).then((res) => {
            setPatient(res.data[0])
        })
    }, [])

    const [examList, setExamList] = useState([])
    useEffect(() => {
        const paType = Pcode.substring(0,2)
        
        if(paType == 'IP'){
            Axios.get('http://localhost:3001/api/treatment/get', {
                params:{
                    Pcode: Pcode
                }
            }).then((res) => {
                
            })
        } else {
            Axios.get('http://localhost:3001/api/examination/getAll', {
                params:{
                    Pocode: Pcode
                }
            }).then((res) => {
                setExamList(res.data)
            })
        }
    }, [])

    return(
        <div>
            <div>
                <h2>Patient Detail</h2>

                <div>
                    Name: {patient.P_fname + ' ' + patient.P_lname}
                </div>

                <div>
                    DOB: {patient.P_dob}
                    Gender: {patient.P_gender}
                </div>

                <div>
                    Phone: {patient.P_phone}
                </div>
            </div>

            <div>
                <h2>Checkup List</h2>
                {examList.map((val) => {
                    return (
                        <div>
                            Fee:{val.O_fee}
                            Date: {val.Exam_date}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PatientDetail