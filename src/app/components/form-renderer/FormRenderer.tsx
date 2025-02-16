import React, { FC } from "react";
import { FORM_FIELDS } from "./constants/form-fields";
import { FormSchema } from "./types/form";

interface FormRendererProps {
  formSchema: FormSchema;
  onChangeData: (name: string, value: string) => void;
}

const FormRenderer: FC<FormRendererProps> = ({ formSchema, onChangeData }) => {
  return (
    <div>
      {formSchema.map((field) => {
        const Component = FORM_FIELDS[field.type];
        return (
          <div key={field.name} className="p-4">
            <Component field={field} onChange={onChangeData} />
          </div>
        );
      })}
    </div>
  );
};

export default FormRenderer;
