import React, { useContext } from "react";
import { BreakdownContext } from "../BreakdownContext";
import Breakdown from "./components/Breakdown";

const BreakdownList = () => {
  const value = useContext(BreakdownContext);

  return (
    <div className="input1-container">
      <ul className="Breakdown-list">{<Breakdown />}</ul>
    </div>
  );
};

export default BreakdownList;
