import { createContext,useState } from "react";

export const UserContext=createContext();

export const UserProvider=(({children})=>{
  const [totalPrice,setTotalPrice]=useState(0);
  return <UserContext.Provider value={{totalPrice,setTotalPrice}}>{children}</UserContext.Provider>
})

