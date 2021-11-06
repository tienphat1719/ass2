export const selectOne = (req,res,db) => {
    const Pcode = req.query.Pcode

    const sqlSelcet = 'SELECT * FROM inpatient WHERE Picode = ?;'
    db.query(sqlSelcet, Pcode,
        
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}