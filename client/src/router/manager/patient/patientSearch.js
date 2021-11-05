import React from "react"
import './patientSearch.css'

const PatientSearch = () => {
    return (
        <div>
            Patient Search
            <div className='search'>
                <input type="text" placeholder="Search Patient ID"/>
                <button className='searchButton'>Search</button>
            </div>
        </div>
    )
}

export default PatientSearch