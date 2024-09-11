import {datePickerFieldComponentFactory} from "./date-picker-field-component.factory";

describe('inputFieldComponent', () => {
    describe('generic()', () => {
        it('should be able to recreate the base object', () => {
            const [base, factory] = [
                {
                    name: 'name',
                    value: 'name',
                    label: 'name',
                    component: 'DatePicker',
                },

                datePickerFieldComponentFactory
                    .generic({
                        name: 'name',
                        value: 'name',
                        label: 'name',
                    })
                    .build(),
            ];

            expect(base).toEqual(factory);
        });
        it('should be able to recreate the base object', () => {
            const [base, factory] = [
                {
                    component: 'DatePicker',
                    name: 'name',
                    value: 'name',
                    label: 'name',
                },

                datePickerFieldComponentFactory
                    .generic({
                        name: 'name',
                    })
                    .build(),
            ];

            expect(base).toEqual(factory);
        });
    });

});
