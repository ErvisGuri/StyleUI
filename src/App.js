import React, { useState } from "react";
import { BreakdownProvider } from "./BreakdownContext";

//Importing Components
import FormInput from "./components/Form";
import BreakdownList from "./components/BreakdownList";
import { Breakdown } from "./components/Breakdown";

import "./App.css";
import { Radio, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

function App() {
  const [inputText, setInputText] = useState('');
  const [breakdown, setBreakdown] = useState([]);

  const radioServices1 = ['Sidewalk Shed', 'Working Platform', 'System Scaffold', 'Stair Tower', 'Shoring', 'Plywood Enclosure', 'Debris Chute', 'Turn Stiles', 'Hanging Scaffold', 'Vertical Netting']
  const radioServices2 = ['Window Protection', 'Scaffold', 'System Scaffold', 'Hoist', 'Fence', 'Roof Protection', 'Overhead Protection', 'Needle Beam', 'Horisontal Netting', 'Barriers']

  return (
    <div className="App">
      <div className="header">
        <h1>Break Downs</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>

      <div className="card">
        <div className="container">
          <div>
            <h2>
              Select a service to modify.
            </h2>
            <div className="services-container" style={{ marginTop: "0", display: "flex", gap: "300px" }}>
              <div className="service1">
                {radioServices1.map((services, i) => {
                  return <Radio key={i}>{` ${services}`}</Radio>
                })}
              </div>
              <div className="service2">
                {radioServices2.map((services, i) => {
                  return <Radio key={i}>{` ${services}`}</Radio>
                })}
              </div>
            </div>
          </div>
          <Breakdown />
          {/* <div className="input-container">
            <div className="input-header">
              <h3>Name</h3>
              <h3 className="rate-header">Rate</h3>
            </div>
            <FormInput inputText={inputText} breakdown={breakdown} setBreakdown={setBreakdown} setInputText={setInputText} />
            <BreakdownList setBreakdown={setBreakdown} />
            <div>
              <Button className="add-button" type="primary" icon={<CheckOutlined className="add-icon" />} >
                Add New Breakdown
              </Button>
            </div>
          </div> */}
          <BreakdownProvider>

          </BreakdownProvider>
        </div>
        <div className="apply-button" >
          <Button className="button" type="primary" icon={<CheckOutlined className="apply-icon" />}>
            APPLY CHANGES
          </Button>
        </div>
      </div>
    </div >
  );
}

export default App;