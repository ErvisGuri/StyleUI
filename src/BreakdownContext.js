import React, { createContext, useState } from "react";

const BreakdownContext = createContext();

export function BreakdownProvider({ children }) {
  const [input, setInput] = useState("");
  const [breakdowns, setBreakdowns] = useState([]);
  const [rate, setRate] = useState("");
  const [serviceText, setServiceText] = useState()

  return (
    <BreakdownContext.Provider
      value={{
        inputValue: [input, setInput],
        breakdownsValue: [breakdowns, setBreakdowns],
        rateValue: [rate, setRate],
        holderValue: [serviceText, setServiceText],
      }}
    >
      {children}
    </BreakdownContext.Provider>
  );
}

export default BreakdownContext;
