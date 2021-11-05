import React, {useState} from 'react'

const UserAdd = () => {
    const [userID, setUserID] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>

            <h2>Dont want to work alone ?</h2>

            <div>
                <input type="text" placeholder="Username" onChange={(e) => {setUserID(e.target.value)}}/>
                <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
            </div>    

            <div>
              <button onClick={() => {}}>ADD</button>
            </div>
        </div>
    )
}

export default UserAdd