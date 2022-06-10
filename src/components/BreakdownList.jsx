import React, { useContext } from "react";

import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

//Importing Components
import Breakdown from "./Breakdown";
import BreakdownContext from "../BreakdownContext";

const BreakdownList = () => {
  const { input, setInput } = useContext(BreakdownContext);
  const [breakdowns, setBreakdown] = useContext(BreakdownContext);

  const addNewBreakdown = (e) => {
    e.preventDefault();
    setBreakdown([
      ...breakdowns,
      { text: breakdowns, completed: false, id: Math.random() * 1000 },
    ]);
  };
  return (
    <div className="input1-container">
      <div className="input-header">
        <h3>Name</h3>
        <h3 className="rate-header">Rate</h3>
      </div>
      <Breakdown />
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
