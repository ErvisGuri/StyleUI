import React from "react";
import BreakdownContext from "../BreakdownContext";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";

const FormInput = ({ breakdown }) => {
  const { inputValue } = React.useContext(BreakdownContext);
  const [input, setInput] = inputValue;

  const inputTextHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="input">
        <Input
          value={input}
          onChange={inputTextHandler}
          className="input-ant"
          type="text"
          placeholder=" test shed 1"
        />
        <Input className="input-ant" type="number" placeholder="25" />
        <div className="background-icon">
          <FontAwesomeIcon
            className="trash"
            icon={faTrash}
            // onClick={deleteHandler}
          />
        </div>
      </div>
    </>
  );
};

export default FormInput;
