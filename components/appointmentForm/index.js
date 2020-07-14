import { useState } from "react";
import { ServiceSelector } from "./serviceSelector";
import { Form } from "./form";

const AppointmentForm = ({ services, forms }) => {
  const [service, setService] = useState();

  const onChange = (value) => {
    setService(value);
  };

  const reset = () => {
    setService("");
  };

  return (
    <div id="appointment-form">
      <div className="heading">Request an appointment</div>
      <ServiceSelector
        services={services}
        value={service}
        onChange={onChange}
      />
      {service && <Form forms={forms} service={service} reset={reset} />}
    </div>
  );
};

export default AppointmentForm;
