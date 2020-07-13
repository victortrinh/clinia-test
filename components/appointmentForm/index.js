import { useState } from "react";
import { ServiceSelector } from "./serviceSelector";
import { Form } from "./form";

const AppointmentForm = ({ services, forms }) => {
  const [service, setService] = useState("");
  const [errors, setErrors] = useState();

  const onChange = (e) => {
    setService(e.currentTarget.value);
    setErrors();
  };

  const validateInput = (input) => {
    if (input.type === "text" && /^\s+$/.test(input.value)) {
      setErrors(`No empty inputs, please fix ${input.name}`);
      return true;
    }

    return false;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {};
    let hasError = false;
    setErrors();
    Object.entries(event.target.elements).forEach(([name, input]) => {
      hasError = validateInput(input);
      data[input.name] = input.value;
    });

    if (hasError) {
      return;
    } else {
      console.log(data);
      setService("");
    }
  };

  return (
    <div id="appointment-form">
      <div className="heading">Request an appointment</div>
      <div>
        <ServiceSelector
          services={services}
          value={service}
          onChange={onChange}
        />
      </div>
      {errors && <div className="error">{errors}</div>}
      {service && <Form forms={forms} service={service} onSubmit={onSubmit} />}
    </div>
  );
};

export default AppointmentForm;
