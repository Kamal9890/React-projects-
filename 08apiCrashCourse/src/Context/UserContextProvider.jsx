import React, { useState } from 'react'

import UserContext from './userContext'

const UserContextProvider = ({children}) => {
         const [data,setData]=useState(null)
  return (
    <UserContext.Provider value={{data, setData}}>
          {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider