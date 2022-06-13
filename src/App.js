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
    { service: 'service-nr-1', id: 0, serviceName: 'Sidewalk Shed' },
    { service: 'service-nr-2', id: 1, serviceName: 'Working Platform' },
    { service: 'service-nr-3', id: 2, serviceName: 'System Scaffold' },
    { service: 'service-nr-4', id: 3, serviceName: 'Stair Tower' },
    { service: 'service-nr-5', id: 4, serviceName: 'Shoring' },
    { service: 'service-nr-6', id: 5, serviceName: 'Plywood Enclosure' },
    { service: 'service-nr-7', id: 6, serviceName: 'Debris Chute' },
    { service: 'service-nr-8', id: 7, serviceName: 'Turn Stiles' },
    { service: 'service-nr-9', id: 8, serviceName: 'Hanging Scaffold' },
    { service: 'service-nr-10', id: 9, serviceName: 'Vertical Netting' },
  ]
  const radioServices2 = [
    { service: 'service-nr-1', id: 0, serviceName: 'Window Protection' },
    { service: 'service-nr-2', id: 1, serviceName: 'Scaffold' },
    { service: 'service-nr-3', id: 2, serviceName: 'System Scaffold' },
    { service: 'service-nr-4', id: 3, serviceName: 'Hoist' },
    { service: 'service-nr-5', id: 4, serviceName: 'Fence' },
    { service: 'service-nr-6', id: 5, serviceName: 'Roof Protection' },
    { service: 'service-nr-7', id: 6, serviceName: 'Overhead Protection' },
    { service: 'service-nr-8', id: 7, serviceName: 'Needle Beam' },
    { service: 'service-nr-9', id: 8, serviceName: 'Horisontal Netting' },
    { service: 'service-nr-10', id: 9, serviceName: 'Barriers' },
  ]

  const onChangeValue = (e) => {
    console.log(e.target.value)
    setSelectService({
      selectedService: e.target.value
    })
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
                    // console.log(services.id)
                    return <Radio value={service.id} checked={selectedService === service.id} onChange={onChangeValue} key={i} > {` ${service.serviceName}`}</Radio>
                  })}
                </div>
                <div className="service2">
                  {radioServices2.map((services, i) => {
                    // console.log(radioServices2.id)
                    return <Radio key={i}>{` ${services.serviceName}`}</Radio>
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