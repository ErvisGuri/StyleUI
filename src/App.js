import React from "react";
import { BreakdownProvider } from "./BreakdownContext";

//Importing Components
import BreakdownList from "./components/BreakdownList";
import Header from "./components/Nav";

import "./App.css";
import { Radio } from "antd";

function App() {
  const radioServices1 = [
    "Sidewalk Shed",
    "Working Platform",
    "System Scaffold",
    "Stair Tower",
    "Shoring",
    "Plywood Enclosure",
    "Debris Chute",
    "Turn Stiles",
    "Hanging Scaffold",
    "Vertical Netting",
  ];
  const radioServices2 = [
    "Window Protection",
    "Scaffold",
    "System Scaffold",
    "Hoist",
    "Fence",
    "Roof Protection",
    "Overhead Protection",
    "Needle Beam",
    "Horisontal Netting",
    "Barriers",
  ];

  return (
    <div className="App">
      <BreakdownProvider>
        <Header />
        <div className="card">
          <div className="container">
            <div>
              <h2>Select a service to modify.</h2>
              <div
                className="services-container"
                style={{ marginTop: "0", display: "flex", gap: "300px" }}
              >
                <div className="service1">
                  {radioServices1.map((services, i) => {
                    return <Radio key={i}>{` ${services}`}</Radio>;
                  })}
                </div>
                <div className="service2">
                  {radioServices2.map((services, i) => {
                    return <Radio key={i}>{` ${services}`}</Radio>;
                  })}
                </div>
              </div>
            </div>
            <div className="input-container">
              <BreakdownList />
            </div>
          </div>
        </div>
      </BreakdownProvider>
    </div>
  );
}

export default App;
