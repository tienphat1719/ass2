import express from 'express'
import cors from 'cors'
import mysql  from 'mysql'

const app = express()

import * as employee from './api/employee.js'
import * as patient from './api/patient.js'
import * as medication from './api/medication.js'

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'tienphat1719',
    database:'hospital'
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//user

//employee
app.post('/api/employee/insert', (req, res) => { employee.insert(req, res, db) })

//patient
app.post('/api/patient/insert', (req, res) => { patient.insert(req, res, db) })
app.get('/api/patient/get', (req, res) => { patient.select(req, res, db) })
app.delete('/api/patient/delete/:P_code', (req, res) => { patient.del(req, res, db) })
app.put('/api/patient/update', (req, res) => { patient.update(req, res, db)} )

//medication
app.post('/api/medication/insert', (req, res) => { medication.insert(req, res, db) })
app.get('/api/medication/get', (req, res) => { medication.select(req, res, db) })
app.delete('/api/medication/delete/:P_code', (req, res) => { medication.del(req, res, db) })
app.put('/api/medication/update', (req, res) => { medication.update(req, res, db)} )


app.listen(3001, () => {
    console.log('Running on port 3001')
})