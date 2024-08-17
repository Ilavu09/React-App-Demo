import { React, createContext, useState } from "react";
import About from "./About";

export const AppContext = createContext();

export function ColorContext({ children }) {
  const [color, setcolor] = useState("white");
  const changeColor = (newcolor) => {
    setcolor(newcolor);
  };
  return (
    <>
      <AppContext.Provider value={{ color, changeColor }}>
        {children}
      </AppContext.Provider>
    </>
  );
}
