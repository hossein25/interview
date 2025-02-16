import { BaseFormField } from "./base-form-field"
import { FormSchema } from "./form"

export enum FieldTypes {
    Input = 'input',
    Select = 'select',
}

export type InputField = BaseFormField & {
    type: FieldTypes.Input,
    placeholder: string
}

type SelectOption = { title: string, value: string }

export type SelectField = BaseFormField & {
    type: FieldTypes.Select,
    options: SelectOption[]
    placeholder?: string
    forms?: Record<string, FormSchema>
}

export type FormField = InputField | SelectField

export type FieldComponentProps<T extends FormField = any> = {
    field: T
    onChange: (name: string, value: string) => void
}
