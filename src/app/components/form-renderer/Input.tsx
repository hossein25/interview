import { FC } from "react";
import { FieldComponentProps, InputField } from "./types/field";

interface InputProps extends FieldComponentProps<InputField> {}

const Input: FC<InputProps> = ({ field, onChange }) => {
  const { name, placeholder, title } = field;

  return (
    <div>
      <label>{title}</label>
      <input name={name} placeholder={placeholder} onChange={({ target }) => onChange(field.name, target.value)} />
    </div>
  );
};

export default Input;
