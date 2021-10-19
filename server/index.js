import express, {json} from 'express'
import cors from 'cors'
import mysql  from 'mysql'

const app = express()

import insert from './api/employee.js'

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'tienphat1719',
    database:'hospital'
})

app.use(cors())
app.use(json())
app.use(express.urlencoded({extended: true}))

app.post('/api/insert', (req, res) => { insert(req, res, db) }

// (req,res) => {
//     const code = req.body.code
//     const lname = req.body.lname
//     // const fname = req.body.fname
//     // const dob = req.body.dob
//     // const addr = req.body.addr
//     // const gender = req.body.gender
//     // const phone = req.body.phone
//     // const startDate = req.body.startDate
//     // const relatedName = req.body.relatedName
//     // const degreeYear = req.body.degreeYear
//     // const dCode = req.body.dCode

//     //, fname, dob, addr, gender, phone, startDate, relatedName, degreeYear, dCode
//     //, ?, ?, ?, ?, ?, ?, ?, ?, ?
//     const sqlInsert = "INSERT INTO employee VALUES (?, ?);"
//     db.query(sqlInsert, [code, lname] ,
        
//         (err, result) => {
//         if(err) {
//             console.log(err)
//         } else {
//             res.send('hello get 5')
//         }
//     })
// }
)

app.listen(3001, () => {
    console.log('Running on port 3001')
})