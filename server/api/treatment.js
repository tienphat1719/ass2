export const selectAll = (req,res,db) => {
    const Picode = req.query.Pcode
    const sqlSelect = 'SELECT * FROM TREATMENT WHERE Picode = ?'

    db.query(sqlSelect, Picode,
        
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}
