import React, { useState, useContext, createContext } from "react";

import { ContextType } from "../types";

const Context = createContext<ContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const StateContext: React.FC<Props> = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
