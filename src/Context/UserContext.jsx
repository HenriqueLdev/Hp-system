import { createContext , useState } from "react";

export const UserContext= createContext()


export const UserProvider=({children})=>{
    return(
        <UserContext.Provider></UserContext.Provider>
    )
}