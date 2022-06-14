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
    setBreakdowns(
      breakdowns.filter((el) => {
        return el.id !== breakdown.id;
      })
    );
  };

  const onChangeRateHandler = (e) => {
    let index = breakdowns.findIndex((bd) => bd.id === breakdown.id);
    breakdowns[index].rate = e.target.value;
    console.log(index);
    setBreakdowns(breakdowns);
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
          onChange={onChangeRateHandler}
          className="input-ant"
          type="number"
          placeholder="add rate"
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
