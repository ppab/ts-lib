import {Factory} from 'fishery';
import {RequireOnly} from "../../../types/types";


type DatePicker = {
    name: string;
    value: string;
    label: string;
    component: 'DatePicker';
    description: string;
};
const test: DatePicker = {
    name: 'date',
    value: 'date',
    label: 'date',
    component: 'DatePicker',
    description: "this is a description"
};


export class DatePickerFieldComponentFactory extends Factory<DatePicker> {
    generic({
                name,
                value,
                label,
            }: RequireOnly<DatePicker, 'name'>) {
        return this.params({
            name,
            value: value ?? name,
            label: label ?? name,
            component: 'DatePicker',
        });
    }
}

export const datePickerFieldComponentFactory = DatePickerFieldComponentFactory.define(
// @ts-ignore
    () => ({}),
);
