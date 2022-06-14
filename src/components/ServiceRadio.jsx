import React, { useState, useEffect, useContext } from "react";
import BreakdownContext from "../BreakdownContext";

import { Radio } from "antd";

const SelectRadio = () => {
  const [selectedService, setSelectService] = useState(0);
  const { breakdownsValue } = useContext(BreakdownContext);
  const [breakdowns, setBreakdowns] = breakdownsValue;

  const radioServices1 = [
    { serviceText: "service-nr-1", id: 0, serviceName: "Sidewalk Shed" },
    { serviceText: "service-nr-2", id: 1, serviceName: "Working Platform" },
    { serviceText: "service-nr-3", id: 2, serviceName: "System Scaffold" },
    { serviceText: "service-nr-4", id: 3, serviceName: "Stair Tower" },
    { serviceText: "service-nr-5", id: 4, serviceName: "Shoring" },
    { serviceText: "service-nr-6", id: 5, serviceName: "Plywood Enclosure" },
    { serviceText: "service-nr-7", id: 6, serviceName: "Debris Chute" },
    { serviceText: "service-nr-8", id: 7, serviceName: "Turn Stiles" },
    { serviceText: "service-nr-9", id: 8, serviceName: "Hanging Scaffold" },
    { serviceText: "service-nr-10", id: 9, serviceName: "Vertical Netting" },
  ];
  const radioServices2 = [
    { serviceText: "service-nr-11", id: 10, serviceName: "Window Protection" },
    { serviceText: "service-nr-12", id: 11, serviceName: "Scaffold" },
    { serviceText: "service-nr-13", id: 12, serviceName: "System Scaffold" },
    { serviceText: "service-nr-14", id: 13, serviceName: "Hoist" },
    { serviceText: "service-nr-15", id: 14, serviceName: "Fence" },
    { serviceText: "service-nr-16", id: 15, serviceName: "Roof Protection" },
    {
      serviceText: "service-nr-17",
      id: 16,
      serviceName: "Overhead Protection",
    },
    { serviceText: "service-nr-18", id: 17, serviceName: "Needle Beam" },
    { serviceText: "service-nr-19", id: 18, serviceName: "Horisontal Netting" },
    { serviceText: "service-nr-20", id: 19, serviceName: "Barriers" },
  ];

  const onChangeValue = (e) => {
    setSelectService(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    let foundService = radioServices1.filter(
      (ser) => ser.id === selectedService
    );
    let foundService2 = radioServices2.filter(
      (ser) => ser.id === selectedService
    );
    if (foundService.length > 0) {
      setBreakdowns([
        ...breakdowns,
        { text: foundService[0].serviceText, id: Math.random() * 1000 },
      ]);
    } else if (foundService2.length > 0) {
      setBreakdowns([
        ...breakdowns,
        { text: foundService2[0].serviceText, id: Math.random() * 1000 },
      ]);
    } else return;
  }, [selectedService]);

  return (
    <div>
      <h2>Select a service to modify.</h2>
      <div
        className="services-container"
        style={{ marginTop: "0", display: "flex", gap: "300px" }}
      >
        <div className="service1">
          {radioServices1.map((service, i) => {
            return (
              <Radio
                value={service.id}
                onChange={onChangeValue}
                checked={selectedService === service.id}
                key={i}
              >{` ${service.serviceName}`}</Radio>
            );
          })}
        </div>
        <div className="service2">
          {radioServices2.map((service, i) => {
            return (
              <Radio
                value={service.id}
                onChange={onChangeValue}
                checked={selectedService === service.id}
                key={i}
              >{` ${service.serviceName}`}</Radio>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectRadio;
