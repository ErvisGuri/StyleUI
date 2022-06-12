import React, { createContext, useState } from "react";

const BreakdownContext = createContext();

export function BreakdownProvider({ children }) {
  const [input, setInput] = useState("");
  const [breakdowns, setBreakdowns] = useState([]);

  return (
    <BreakdownContext.Provider
      value={{
        inputValue: [input, setInput],
        breakdownsValue: [breakdowns, setBreakdowns],
      }}
    >
      {children}
    </BreakdownContext.Provider>
  );
}

export default BreakdownContext;
