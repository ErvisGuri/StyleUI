import React, { useState } from "react";
import { BreakdownProvider } from "./BreakdownContext";

//Importing Components
import BreakdownList from "./components/BreakdownList";
import Header from "./components/Nav";

import "./App.css";
import { Radio } from "antd";


function App() {
  const [selectedService, setSelectService] = useState(0);

  const radioServices1 = [
    { serviceText: 'service-nr-1', id: 0, serviceName: 'Sidewalk Shed' },
    { serviceText: 'service-nr-2', id: 1, serviceName: 'Working Platform' },
    { serviceText: 'service-nr-3', id: 2, serviceName: 'System Scaffold' },
    { serviceText: 'service-nr-4', id: 3, serviceName: 'Stair Tower' },
    { serviceText: 'service-nr-5', id: 4, serviceName: 'Shoring' },
    { serviceText: 'service-nr-6', id: 5, serviceName: 'Plywood Enclosure' },
    { serviceText: 'service-nr-7', id: 6, serviceName: 'Debris Chute' },
    { serviceText: 'service-nr-8', id: 7, serviceName: 'Turn Stiles' },
    { serviceText: 'service-nr-9', id: 8, serviceName: 'Hanging Scaffold' },
    { serviceTextText: 'service-nr-10', id: 9, serviceName: 'Vertical Netting' },
  ]
  const radioServices2 = [
    { serviceText: 'service-nr-1', id: 10, serviceName: 'Window Protection' },
    { serviceText: 'service-nr-2', id: 11, serviceName: 'Scaffold' },
    { serviceText: 'service-nr-3', id: 12, serviceName: 'System Scaffold' },
    { serviceText: 'service-nr-4', id: 13, serviceName: 'Hoist' },
    { serviceText: 'service-nr-5', id: 14, serviceName: 'Fence' },
    { serviceText: 'service-nr-6', id: 15, serviceName: 'Roof Protection' },
    { serviceText: 'service-nr-7', id: 16, serviceName: 'Overhead Protection' },
    { serviceText: 'service-nr-8', id: 17, serviceName: 'Needle Beam' },
    { serviceText: 'service-nr-9', id: 18, serviceName: 'Horisontal Netting' },
    { serviceText: 'service-nr-10', id: 19, serviceName: 'Barriers' },
  ]

  const onChangeValue = (e) => {
    setSelectService(e.target.value)
  }



  return (
    <div className="App">
      <BreakdownProvider>
        <Header />
        <div className="card">
          <div className="container">
            <div>
              <h2>
                Select a service to modify.
              </h2>
              <div className="services-container" style={{ marginTop: "0", display: "flex", gap: "300px" }}>
                <div className="service1">
                  {radioServices1.map((service, i) => {
                    return <Radio value={service.id} onChange={onChangeValue} checked={selectedService === service.id} key={i} > {` ${service.serviceName}`}</Radio>
                  })}
                </div>
                <div className="service2">
                  {radioServices2.map((service, i) => {
                    return <Radio value={service.id} onChange={onChangeValue} checked={selectedService === service.id} key={i}>{` ${service.serviceName}`}</Radio>
                  })}
                </div>
              </div>
            </div>
            <BreakdownList />
          </div>
        </div>
      </BreakdownProvider >
    </div >
  );
}

export default App;