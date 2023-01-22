import { createContext,useState } from "react";

export const AuthContext=createContext();

export default function AuthContextProvider({children}){
    const [authState,setAuthState] = useState(false);
    const [category,setCategory]=useState(null)
    const [sort,setSort]=useState(null)
    



    const categoryParam=(value)=>{
        setCategory(value)
        // console.log(category)
    }
    const loginUser=()=>{
        setAuthState(true);
    }
    const logoutUser=()=>{
        setAuthState(false);
    }
    const sorting=(val)=>{
        setSort(val)
    }
    return (
        <AuthContext.Provider value={{authState,categoryParam,loginUser,category,sorting,sort,logoutUser}}>{children}</AuthContext.Provider>
    )
}