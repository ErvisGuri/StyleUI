import React, { useState } from "react";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

//Importing Components
import FormInput from "./components/Form";

const Breakdown = (props) => {
  const [inputText, setInputText] = useState("");
  const [breakdown, setBreakdown] = useState([]);

  return (
    <div className="input-container">
      <div className="input-header">
        <h3>Name</h3>
        <h3 className="rate-header">Rate</h3>
      </div>
      <FormInput
        inputText={inputText}
        breakdown={breakdown}
        setBreakdown={setBreakdown}
        setInputText={setInputText}
      />
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

export default Breakdown;
