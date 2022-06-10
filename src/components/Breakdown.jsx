import React, { useState, useContext } from "react";

//Importing Components
import FormInput from "./Form";
import BreakdownContext from "../BreakdownContext";

const Breakdown = () => {
  const { input, setInput } = useContext(BreakdownContext);
  const [breakdowns, setBreakdown] = useContext(BreakdownContext);

  return (
    <div className="input-container">
      <FormInput
        input={input}
        breakdowns={breakdowns}
        setBreakdown={setBreakdown}
        setInput={setInput}
      />
    </div>
  );
};

export default Breakdown;
