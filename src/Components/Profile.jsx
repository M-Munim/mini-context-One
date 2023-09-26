import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    // data
    const { user } = useContext(UserContext)

    // conditional return
    if (!user) return <div>Please Login</div>
    return <div>Welcome {user.username}</div>
}

export default Profile