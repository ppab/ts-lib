import {colDefFactory} from "./col-def-field.factory";

describe('colDefFactory', () => {
    describe('Field()', () => {
        it('should be able to recreate the base object when no params are provided ', () => {
            const [base, factory] = [
                {
                    "field": "MyField",
                    "editable": false,
                },
                colDefFactory
                    .Field({
                        field: "MyField",
                    })
                    .build(),
            ];

            expect(base).toEqual(factory);
        });
        it('should be able to recreate the base object with "editable"  ', () => {
            const [base, factory] = [
                {
                    "field": "MyField",
                    "editable": true,
                    "valueSetter": ["reduxValueSetter2", {
                        "url": "urls.mutateUrl",
                        "actionDispatcher": "actions.updateAction",
                        "queryParam": ""
                    }],
                },
                colDefFactory
                    .Field({
                        field: "MyField",
                        editable: true
                    }).build()
            ];

            expect(base).toEqual(factory);
        });
        it('should be able to recreate the base object with "editable"  ', () => {
            const [base, factory] = [
                {
                    "field": "MyField",
                    "editable": true,
                    "valueSetter": ["reduxValueSetter2", {
                        "url": "urls.mutateUrl",
                        "actionDispatcher": "actions.updateAction",
                        "queryParam": "Test"
                    }],
                },
                colDefFactory
                    .Field({
                        field: "MyField",
                        editable: true,
                        "valueSetter": ["reduxValueSetter2", {
                            "url": "urls.mutateUrl",
                            "actionDispatcher": "actions.updateAction",
                            "queryParam": "Test"
                        }],
                    })
                    .build(),
            ];

            expect(base).toEqual(factory);
        });
    });

    describe('EnumField()', () => {
        enum TestEnum {
            Test1 = "Test1",
            Test2 = "Test2",

        }

        it('should be able to recreate the base object when field and Object are provided', () => {
            const [base, factory] = [
                {
                    "field": "MyEnumField",
                    "editable": true,
                    "valueSetter": ["reduxValueSetter2", {
                        "url": "urls.mutateUrl",
                        "actionDispatcher": "actions.updateAction",
                        "queryParam": ""
                    }],
                    "cellEditor": "agSelectCellEditor",
                    "cellEditorParams": {"values": ["Test1", "Test2"]},

                },
                colDefFactory
                    .EnumField({
                        field: "MyEnumField",
                        enumObj: TestEnum
                    })
                    .build(),
            ];

            expect(base).toEqual(factory);
        });

    });

});
