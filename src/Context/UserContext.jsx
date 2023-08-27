import { createContext , useState } from "react";

export const UserContext= createContext()


export const UserProvider=({children})=>{
    const [cpf,setCpf] = useState('')
    const [client,setClient]=useState(null)
    const [vencimento,setVencimento]=useState(new Date())
    return(
        <UserContext.Provider value={{cpf,setCpf,client,setClient,vencimento,setVencimento}}>
            {children}
        </UserContext.Provider>
    )
}