import React, { useState, useContext } from "react";

//Importing Components
import FormInput from "./Form";
import BreakdownContext from "../BreakdownContext";

const Breakdown = (props) => {
  const [inputText, setInputText] = useState("");
  const [breakdown, setBreakdown] = useState([]);

  const { input, setInput } = useContext(BreakdownContext);
  console.log(input);
  setInput("hey");
  console.log(input);

  return (
    <div className="input-container">
      <FormInput
        inputText={inputText}
        breakdown={breakdown}
        setBreakdown={setBreakdown}
        setInputText={setInputText}
      />
    </div>
  );
};

export default Breakdown;
