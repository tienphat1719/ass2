export const login = (req,res,db) => {
    const id = req.query.userID
    const password = req.query.password

    const sqlInsert = 'SELECT userType FROM user WHERE id = ? AND password = ?;'
    db.query(sqlInsert, [id, password],

        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}

export const signup = (req,res,db) => {
    const P_fname = req.body.P_fname
    const P_lname = req.body.P_lname
    const P_dob = req.body.P_dob
    const P_gender = req.body.P_gender
    const P_phone = req.body.P_phone

    const sqlInsert = 'INSERT INTO patient(P_fname, P_lname, P_dob, P_gender, P_phone) VALUES (?, ?, ?, ?, ?);'
    db.query(sqlInsert, [P_fname, P_lname, P_dob, P_gender, P_phone] ,
        
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}