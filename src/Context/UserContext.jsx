import { createContext , useState } from "react";

export const UserContext= createContext()


export const UserProvider=({children})=>{
    const [cpf,setCpf] = useState('')
    const [client,setClient]=useState('')
    return(
        <UserContext.Provider value={{cpf,setCpf,client,setClient}}>
            {children}
        </UserContext.Provider>
    )
}