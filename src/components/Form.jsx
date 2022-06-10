import React, { useContext } from "react";
import BreakdownContext from "../BreakdownContext";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";

const FormInput = () => {
  const [input, setInput] = useContext(BreakdownContext);
  const [breakdowns, setBreakdown] = useContext(BreakdownContext);

  const inputTextHandler = (e) => {
    setInput(e.target.value);
  };

  const deleteHandler = () => {
    console.log("Delete");
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
        <Input className="input-ant" type="number" placeholder=" 25" />
        <div className="background-icon">
          <FontAwesomeIcon
            className="trash"
            icon={faTrash}
            onClick={deleteHandler}
          />
        </div>
      </div>
    </>
  );
};

export default FormInput;
