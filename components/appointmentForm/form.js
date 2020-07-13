import { InputType } from "../../common/enum/inputType";

export const Form = ({ service, onSubmit, forms }) => {
  let form = forms.find((form) => form.services.includes(service));

  if (!form) {
    form = forms.find((form) => form.services.includes("*"));
  }

  return (
    <div className="form">
      <div className="title">{form.title}</div>
      <form onSubmit={onSubmit}>
        {form.fields.map((field) => (
          <div key={field.name} className="field">
            <label htmlFor={field.name}>{field.label}</label>
            {field.type !== InputType.dropdown ? (
              <input
                name={field.name}
                id={field.name}
                type={field.type === InputType.phone ? "number" : field.type}
                placeholder={field.label}
                required
              />
            ) : (
              <select name={field.name} id={field.name} required>
                <option value="">Please select a {field.label}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};
