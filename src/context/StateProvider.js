import React, { createContext, useContext, } from "react";

export const StateContext = createContext();

export const StateProvider = ({ initalState,children }, ) =>( 
  <StateContext.Provider value={initalState}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)