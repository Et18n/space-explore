"use client";

import { useState, createContext, useContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [tab, settab] = useState("home");
  return (
    <GlobalContext.Provider value={{ tab, settab }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
