import { useEffect } from "react";
import { Select } from "antd";

export const ServiceSelector = ({ value, onChange, services }) => {
  useEffect(() => {}, [value]);

  return (
    <div className="service-selector">
      <Select value={value} onChange={onChange} defaultValue="">
        <Select.Option value="">Select a service</Select.Option>
        {services.map((service) => (
          <Select.Option key={service} value={service}>
            {service}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};
