// importing react
import React from "react";

// creating global variable
const UserContext = React.createContext()

export default UserContext;

// components wrapped in var =>  UserContext becomes provider

// all these components can take directly access of all the states using userContext

