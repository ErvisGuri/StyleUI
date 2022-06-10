import React, { useContext } from "react";

import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

//Importing Components
import Breakdown from "./Breakdown";
import BreakdownContext from "../BreakdownContext";

const BreakdownList = () => {
  const value = useContext(BreakdownContext);

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
        >
          Add New Breakdown
        </Button>
      </div>
    </div>
  );
};

export default BreakdownList;
