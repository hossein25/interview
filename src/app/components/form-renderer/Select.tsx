import { FC, useState } from 'react';
import FormRenderer from './FormRenderer';
import { FieldComponentProps, SelectField } from './types/field';
import { FormSchema } from './types/form';

interface SelectProps extends FieldComponentProps<SelectField> { }

const Select: FC<SelectProps> = ({ field, onChange }) => {
    const { name, placeholder, title, options, forms } = field
    const [formSchema, setFormSchema] = useState<FormSchema | null>(null)


    return <div>
        <label>{title}</label>
        <select name={name} onChange={({ target }) => {
            onChange(field.name, target.value);
            if (forms?.[target.value]) {
                setFormSchema(forms[target.value])
            }
        }}>
            {options.map(option => {
                return <option key={option.value} value={option.value}>{option.title}</option>
            })}
        </select>

        {formSchema && <FormRenderer formSchema={formSchema} onChangeData={onChange} />}
    </div>
}

export default Select;