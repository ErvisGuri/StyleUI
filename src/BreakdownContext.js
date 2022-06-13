import React, { createContext, useState } from "react";

const BreakdownContext = createContext();

export function BreakdownProvider({ children }) {
  const [input, setInput] = useState("");
  const [breakdowns, setBreakdowns] = useState([]);
  const [rate, setRate] = useState("");
  const [servicetext, setServiceText] = useState("")

  return (
    <BreakdownContext.Provider
      value={{
        inputValue: [input, setInput],
        breakdownsValue: [breakdowns, setBreakdowns],
        rateValue: [rate, setRate],
        holderValue: [servicetext, setServiceText],
      }}
    >
      {children}
    </BreakdownContext.Provider>
  );
}

export default BreakdownContext;
