import './App.css';
import {useState} from 'react'
import Axios from 'axios'

function App() {
  const [code, setCode] = useState('')
  const [lname, setLname] = useState('')
  const [fname, setFname] = useState('')
  const [dob, setDOB] = useState('')
  const [addr, setAdrr] = useState('')
  const [gender, setGender] = useState('')
  const [phone, setPhone] = useState('')
  const [startDate, setStartDate] = useState('')
  const [relatedName, setRelatedName] = useState('')
  const [degreeYear, setDegreeYear] = useState('')
  const [dCode, setDCode] = useState('')

  const submitForm = () => {
    Axios.post('http://localhost:3001/api/insert', {
      code: code,
      lname: lname,
      // fname: fname,
      // dob: dob,
      // addr: addr,
      // gender: gender,
      // phone: phone,
      // startDate: startDate,
      // relatedName: relatedName,
      // degreeYear: degreeYear,
      // dCode: dCode
    }).then(() => {alert('insert success')})
  }

  return (
    <div className="App">
      <h1>Hospital App</h1>
      <h2>Insert employee</h2>
      <div  className="form">
        <label>Code</label>
        <input type='text' onChange = {(e) => {setCode(e.target.value)}}/>

        <label>Last Name</label>
        <input type='text' onChange = {(e) => {setLname(e.target.value)}}/>

        {/* <label>First Name</label>
        <input type='text' onChange = {(e) => {setFname(e.target.value)}}/>

        <label>DOB</label>
        <input type='text' onChange = {(e) => {setDOB(e.target.value)}}/>

        <label>Address</label>
        <input type='text' onChange = {(e) => {setAdrr(e.target.value)}}/>

        <label>Gender</label>
        <input type='text' onChange = {(e) => {setGender(e.target.value)}}/>

        <label>Phone</label>
        <input type='text' onChange = {(e) => {setPhone(e.target.value)}}/>

        <label>Start date</label>
        <input type='text' onChange = {(e) => {setStartDate(e.target.value)}}/>

        <label>Related name</label>
        <input type='text' onChange = {(e) => {setRelatedName(e.target.value)}}/>

        <label>Degree year</label>
        <input type='text' onChange = {(e) => {setDegreeYear(e.target.value)}}/>

        <label>Department code</label>
        <input type='text' onChange = {(e) => {setDCode(e.target.value)}}/> */}

        <button onClick={submitForm}>Submit</button>
      </div>

    </div>
  );
}

export default App;
