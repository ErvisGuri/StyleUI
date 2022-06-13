import React from "react";

import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

//Importing Components
import Breakdown from "./Breakdown";
import BreakdownContext from "../BreakdownContext";
import FormInput from "./Form";

const BreakdownList = (selectedService, changeTextHandler) => {
  const { inputValue, breakdownsValue, rateValue } = React.useContext(
    BreakdownContext
  );
  const [input, setInput] = inputValue;
  const [breakdowns, setBreakdowns] = breakdownsValue;
  const [rate, setRate] = rateValue;

  const addNewBreakdown = (e) => {
    e.preventDefault();
    setBreakdowns([
      ...breakdowns,
      { text: input, completed: false, rate: rate, id: Math.random() * 1000 },
    ]);
    setInput("");
    setRate();
  };

  const applyChangesHandler = () => {
    let sum = 0;

    breakdowns.forEach((element) => {
      sum += parseInt(element.rate);
    });
    console.log(sum);

    if (sum > 100) {
      alert("The changes were not saved. The total rate will be 100 or less.");
    } else alert("The changes were saved");
  };

  return (
    <>
      <div className="input1-container">
        <div className="input-header">
          <h3>Name</h3>
          <h3 className="rate-header">Rate</h3>
        </div>
        {breakdowns.map((breakdown, i) => {
          return <Breakdown key={breakdown.id} breakdown={breakdown} />;
        })}
        <FormInput
          changeTextHandler={changeTextHandler}
          selectedService={selectedService}
          breakdown={{ text: "", rate: null }}
        ></FormInput>
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
      <div
        className="apply-button"
        style={{ display: "flex", marginTop: "450px", marginRight: "5px" }}
      >
        <Button
          onClick={applyChangesHandler}
          className="button"
          type="primary"
          icon={<CheckOutlined className="apply-icon" />}
        >
          APPLY CHANGES
        </Button>
      </div>
    </>
  );
};

export default BreakdownList;
