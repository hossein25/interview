import { FC } from "react";
import Input from "../Input";
import Select from "../Select";
import { FieldComponentProps, FieldTypes } from "../types/field";

export const FORM_FIELDS: Record<FieldTypes, FC<FieldComponentProps>> = {
  input: Input,
  select: Select,
};
