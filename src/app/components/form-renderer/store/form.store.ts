import { create } from "zustand";
import { FormSchema } from "../types/form";

interface FormStore {
  formSchema: FormSchema | null;
  setFormSchema: (formSchema: FormSchema) => void;
  formData: Record<string, string>;
  setFormData: (formData: Record<string, string>) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  formSchema: null,
  formData: {},
  setFormSchema: (formSchema) => {
    set({ formSchema });
  },
  setFormData: (formData) => {
    set((state) => ({ formData: { ...state.formData, ...formData } }));
  },
}));
