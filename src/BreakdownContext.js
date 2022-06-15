import React, { createContext, useState, useEffect } from "react";

const BreakdownContext = createContext();


export function BreakdownProvider({ children }) {
  const [input, setInput] = useState("");
  const [breakdowns, setBreakdowns] = useState(() => JSON.parse(localStorage.getItem('breakdown'))
    || []
  );
  const [rate, setRate] = useState("");


  useEffect(() => {
    const Breakdowns = JSON.parse(localStorage.getItem('breakdown'));
    if (Breakdowns) {
      setBreakdowns(!breakdowns);
    }
  }, [])

  //Saving data to local storage 
  useEffect(() => {
    localStorage.setItem('breakdown', JSON.stringify(breakdowns));
  }, [breakdowns]);




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
