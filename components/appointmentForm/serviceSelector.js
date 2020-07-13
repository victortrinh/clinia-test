import { useEffect } from "react";

export const ServiceSelector = ({ value, onChange, services }) => {
  useEffect(() => {}, [value]);

  return (
    <select className="service-selector" value={value} onChange={onChange}>
      <option value="">Select a service</option>
      {services.map((service) => (
        <option key={service} value={service}>
          {service}
        </option>
      ))}
    </select>
  );
};
