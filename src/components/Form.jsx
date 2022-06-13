import React from "react";
import BreakdownContext from "../BreakdownContext";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";

const FormInput = (handleChange) => {
  const { rateValue, holderValue } = React.useContext(BreakdownContext);
  const [rate, setRate] = rateValue;
  const [serviceText, setServiceText] = holderValue;

  const serviceTextHandler = (e) => {
    setServiceText({ serviceText: e.target.value });
    console.log(e);
  };
  const rateInputHandler = (e) => {
    setRate(e.target.value);
  };
  console.log(handleChange);

  return (
    <>
      <div className="input">
        <Input
          defaultValue={serviceText}
          onChange={handleChange}
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
