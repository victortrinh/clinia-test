import { InputType } from "../../common/enum/inputType";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { Input, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";

const noWhitespaceRegex = /^\S*$/;
const onlyNumberRegex = /^[0-9]*$/;

export const Form = ({ service, forms, reset }) => {
  const { errors, handleSubmit, control } = useForm();
  let form = forms.find((form) => form.services.includes(service));

  if (!form) {
    form = forms.find((form) => form.services.includes("*"));
  }

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      console.log({ service, ...data });
      reset();
    }
  };

  const getOptions = (options) => {
    return options.map((option) => ({
      value: option,
      label: option,
    }));
  };

  const getFormType = (field) => {
    switch (field.type) {
      case InputType.textarea:
        return (
          <Controller
            control={control}
            as={TextArea}
            rules={{
              required: true,
              pattern: noWhitespaceRegex,
            }}
            name={field.name}
            id={field.name}
            type={field.type}
            placeholder={field.label}
          />
        );
      case InputType.dropdown:
        return (
          <Controller
            name={field.name}
            as={Select}
            options={getOptions(field.options)}
            control={control}
            rules={{ required: true }}
            placeholder={field.label}
          />
        );
      default:
        return (
          <Controller
            control={control}
            as={Input}
            rules={{
              required: true,
              pattern:
                field.type === InputType.phone
                  ? onlyNumberRegex
                  : noWhitespaceRegex,
            }}
            name={field.name}
            id={field.name}
            type={field.type}
            placeholder={field.label}
          />
        );
    }
  };

  return (
    <div className="form">
      <div className="title">{form.title}</div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {form.fields.map((field) => (
          <div key={field.name} className="field">
            <label htmlFor={field.name}>{field.label}</label>
            {getFormType(field)}
            {errors[field.name] && (
              <div className="validation-error">
                This field is required.
                {field.type === InputType.email &&
                  " Has to be in the e-mail form."}
                {field.type !== InputType.dropdown &&
                  field.type !== InputType.phone &&
                  " Cannot contain only whitespaces."}
                {field.type === InputType.phone &&
                  " Has to contain only numbers."}
              </div>
            )}
          </div>
        ))}
        <input type="submit" value="Submit" />
      </StyledForm>
    </div>
  );
};

const StyledForm = styled.form`
  .validation-error {
    color: red;
  }
`;
