import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({children}) {
    const [userData, setUserData] = useState();

    function LogInUser(user){
        setUserData(user);
    }

    return (
        <UserContext.Provider value={{userData, LogInUser}}>
            {children}
        </UserContext.Provider>
    );
}