import React from "react";

import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

//Importing Components
import Breakdown from "./Breakdown";
import BreakdownContext from "../BreakdownContext";
import FormInput from "./Form";

const BreakdownList = () => {
  const { inputValue, breakdownsValue } = React.useContext(BreakdownContext);
  const [input] = inputValue;
  const [breakdowns, setBreakdowns] = breakdownsValue;

  const addNewBreakdown = (e) => {
    e.preventDefault();
    setBreakdowns([
      ...breakdowns,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
  };
  return (
    <div className="input1-container">
      <div className="input-header">
        <h3>Name</h3>
        <h3 className="rate-header">Rate</h3>
      </div>
      {breakdowns.map((breakdown, i) => {
        return <Breakdown key={i} breakdown={breakdown} />;
      })}

      <FormInput breakdown={{ text: "", rate: null }}></FormInput>
      <div>
        <Button
          className="add-button"
          type="primary"
          icon={<CheckOutlined className="add-icon" />}
          onClick={addNewBreakdown}
        >
          Add New Breakdown
        </Button>
      </div>
    </div>
  );
};

export default BreakdownList;
