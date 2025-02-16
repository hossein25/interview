import React, { FC } from "react";
import { useFormStore } from "./store/form.store";

interface FormOutputProps {}

const FormOutput: FC<FormOutputProps> = () => {
  const formData = useFormStore((store) => store.formData);

  return (
    <div>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default FormOutput;
