import React from 'react'
import App from './App'
import { createContext, useReducer, useState } from 'react'

const loginstatus = 0;
const loginReducer = (state,action)=>{
    
    switch(action.type){
      case "Completed":
        console.log("Got"+action.username)
        return {status:1,username:action.username,token:action.token};
      case "Logout":
        return {status:0,username:'undefined',token:null};
      default:
        return {status:-1,username:'undefined',token:null};
    }
}
export const LoginContext = createContext();

export default function Store() {
const [getLoginStatus,dispatch] = useReducer(loginReducer,loginstatus);

  return (
    <>
    <LoginContext.Provider value={{loginState:getLoginStatus, loginDispatch:dispatch}}>
      <App/>
    </LoginContext.Provider>
    </>
  )
}
