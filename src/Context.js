import React, { useState, useContext, useReducer, useEffect } from 'react'
import reducer from './Reducer';
import Data from './Data';

const AppContext = React.createContext()

const initialState = {
  loading: false,
  data: Data,
  like: 0,
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    
 const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  return (
      <AppContext.Provider
      value={{
          ...state,
          increase,
        }}
        >
            {children}
        </AppContext.Provider>
        )
    }
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}