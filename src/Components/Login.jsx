import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

// how to fetch values from UserContext
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // method
    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(username, password)
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                placeholder='Username'
                // take ur value from username
                value={username}
                // if any change occur in filed 
                onChange={(e) => setUsername(e.target.value)}
            />

            <input type="text"
                placeholder='Password'
                // take ur value from password
                value={password}
                // if any change occur in filed 
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login