'use client';

import { useEffect } from "react";
import FormOutput from "./components/form-renderer/FormOutput";
import FormRenderer from "./components/form-renderer/FormRenderer";
import { baseFormSchema } from "./components/form-renderer/constants/form-schema";
import { useFormStore } from "./components/form-renderer/store/form.store";

export default function Home() {
  const { formSchema, setFormSchema, setFormData } = useFormStore()

  const onChangeData = (name: string, value: string) => {
    setFormData({ [name]: value })
  }

  useEffect(() => {
    setFormSchema(baseFormSchema)
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] mt-20 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {formSchema &&
        <FormRenderer formSchema={formSchema} onChangeData={onChangeData} />
      }

      <FormOutput />
    </div>
  );
}
