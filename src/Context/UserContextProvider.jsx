import React from "react";
import UserContext from "./UserContext";

// passing prop which will be displayed as it is
const UserContextProvider = ({ children }) => {

    // api calls and states will be there
    const [user, setUser] = React.useState(null)
    return(

    // throughing in the values 
    <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>)
}

export default UserContextProvider;