import React, { useState, useContext } from "react";
import { BreakdownContext } from "../BreakdownContext";

const BreakdownList = () => {
  const value = useContext(BreakdownContext);

  return (
    <div className="input1-container">
      <ul className="Breakdown-list">{}</ul>
    </div>
  );
};

export default BreakdownList;
