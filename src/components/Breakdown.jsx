import React from "react";

//Importing Components
import BreakdownContext from "../BreakdownContext";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";

const Breakdown = ({ breakdown }) => {
  const { breakdownsValue } = React.useContext(BreakdownContext);
  const [breakdowns, setBreakdowns] = breakdownsValue;

  const deleteHandler = () => {
    console.log(breakdown.id);
    setBreakdowns(
      breakdowns.filter((el) => {
        return el.id !== breakdown.id;
      })
    );
  };

  return (
    <div className="input-container">
      <div className="input">
        <Input
          value={breakdown.text}
          className="input-ant"
          type="text"
          readOnly
        />
        <Input
          value={breakdown.rate}
          className="input-ant"
          type="number"
          placeholder="add rate"
          readOnly
        />
        <div className="background-icon">
          <FontAwesomeIcon
            className="trash"
            icon={faTrash}
            onClick={deleteHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Breakdown;
