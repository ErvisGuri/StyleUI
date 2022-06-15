import React from "react";
import BreakdownContext from "../BreakdownContext";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";

const FormInput = () => {
  const { rateValue, inputValue } = React.useContext(BreakdownContext);
  const [rate, setRate] = rateValue;
  const [input, setInput] = inputValue;

  const serviceTextHandler = (e) => {
    setInput(e.target.value);
  };
  const rateInputHandler = (e) => {
    setRate(e.target.value);
  };

  return (
    <>
      <div className="input">
        <Input
          value={input}
          onChange={serviceTextHandler}
          className="input-ant"
          type="text"
          placeholder=" test shed 1"
        />
        <Input
          value={rate}
          onChange={rateInputHandler}
          className="input-ant"
          type="number"
          placeholder="add rate"
          checked="checked"
        />
        <div className="background-icon">
          <FontAwesomeIcon className="trash" icon={faTrash} />
        </div>
      </div>
    </>
  );
};

export default FormInput;
