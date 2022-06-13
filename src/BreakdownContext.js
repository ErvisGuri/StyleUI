import React, { createContext, useState } from "react";

const BreakdownContext = createContext();

export function BreakdownProvider({ children }) {
  const [input, setInput] = useState("");
  const [breakdowns, setBreakdowns] = useState([]);
  const [rate, setRate] = useState("");

  return (
    <BreakdownContext.Provider
      value={{
        inputValue: [input, setInput],
        breakdownsValue: [breakdowns, setBreakdowns],
        rateValue: [rate, setRate],
      }}
    >
      {children}
    </BreakdownContext.Provider>
  );
}

export default BreakdownContext;
