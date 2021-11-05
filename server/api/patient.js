export const insert = (req,res,db) => {
    const P_code = req.body.P_code
    const P_lname = req.body.P_lname

    const sqlInsert = 'INSERT INTO patient VALUES (?, ?);'
    db.query(sqlInsert, [P_code, P_lname] ,
        
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}

export const selectAll = (req,res,db) => {
    const sqlSelcet = 'SELECT * FROM patient;'

    db.query(sqlSelcet,
        
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}

export const selectOne = (req,res,db) => {
    const Pcode = req.query.Pcode

    const sqlSelcet = 'SELECT * FROM patient WHERE Pcode = ?;'
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

export const selectOneWithStart = (req,res,db) => {
    const Pcode = req.query.Pcode

    const sqlSelect = 'SELECT * FROM patient (lower(Pcode) LIKE \'?%\')';
    db.query(sqlSelect, Pcode,
        
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}

function getCodeFromDocID(sql, req, db) {
    const docID = req.params.Pcode;
    return new Promise((resolve, reject) => {
        db.query(sql, [docID], 
        
        (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })  
    })
}

export const getInPatientIDFromDocID = async (req, res, db) => {
    const docID = req.params.Doc_code;

    const sqlTakePicode = 'SELECT Picode FROM inpatient WHERE Doc_code = ?';
    const sqlTakePocode = 'SELECT Pocode FROM examination WHERE Doc_code = ?';
    
    const piCode = await getCodeFromDocID(sqlTakePicode, req, db);
    const poCode = await getCodeFromDocID(sqlTakePocode, req, db);
    const pCodes = piCode.concat(poCode);

    const sqlSelect = 'SELECT * FROM patient WHERE Pcode = ?;'
    // retrieve thông tin của patient có id trong pCode
    const result = pCodes.map(async(code) => {
        return await new Promise((resolve, reject) => {
            db.query(sqlSelect, code, 
            
            (err, result) => {
                if(err) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    });
    
    console.log(result);
    res.send(result);      
}

export const del = (req,res,db) => {
    const P_code = req.params.P_code
    
    const sqlDelete = 'DELETE FROM patient WHERE Pcode = ?'
    db.query(sqlDelete, P_code,
        
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}

export const update = (req,res,db) => {
    const P_code = req.body.P_code
    const P_lname = req.body.P_lname

    const sqlUpdate = 'UPDATE patient SET P_lname = ? WHERE P_code = ?'
    db.query(sqlUpdate, [P_lname, P_code], 
        
        (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}

