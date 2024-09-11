import {valueSetterFactory} from "./value-setter.factory";

describe('ValueSetterFactory', () => {
    describe('ReduxValueSetter()', () => {
        it('should be able to recreate the base object with no arguments ', () => {

                const [base, factory] = [
                    {
                        "valueSetter": ["reduxValueSetter2", {
                            "url": "urls.mutateUrl",
                            "actionDispatcher": "actions.updateAction",
                            "queryParam": ""
                        }]
                    },
                    valueSetterFactory
                        .ReduxValueSetter({})
                        .build(),
                ];

                expect(base).toEqual(factory);
            }
        );
        it('should be able to recreate the base object with "url" ', () => {

                const [base, factory] = [
                    {
                        "valueSetter": ["reduxValueSetter2", {
                            "url": "test",
                            "actionDispatcher": "actions.updateAction",
                            "queryParam": ""
                        }]
                    },
                    valueSetterFactory
                        .ReduxValueSetter({
                            url: "test"
                        })
                        .build(),
                ];

                expect(base).toEqual(factory);
            }
        );
        it('should be able to recreate the base object with "actionDispatcher" ', () => {

                const [base, factory] = [
                    {
                        "valueSetter": ["reduxValueSetter2", {
                            "url": "urls.mutateUrl",
                            "actionDispatcher": "test",
                            "queryParam": ""
                        }]
                    },
                    valueSetterFactory
                        .ReduxValueSetter({
                            actionDispatcher: "test"
                        })
                        .build(),
                ];

                expect(base).toEqual(factory);
            }
        );
        it('should be able to recreate the base object with "queryParam" ', () => {

                const [base, factory] = [
                    {
                        "valueSetter": ["reduxValueSetter2", {
                            "url": "urls.mutateUrl",
                            "actionDispatcher": "actions.updateAction",
                            "queryParam": "test"
                        }]
                    },
                    valueSetterFactory
                        .ReduxValueSetter({
                            queryParam: "test"
                        })
                        .build(),
                ];

                expect(base).toEqual(factory);
            }
        );
        it('should be able to recreate the base object with "queryParam,url,actionDispatcher" ', () => {

                const [base, factory] = [
                    {
                        "valueSetter": ["reduxValueSetter2", {
                            "url": "test",
                            "actionDispatcher": "test",
                            "queryParam": "test"
                        }]
                    },
                    valueSetterFactory
                        .ReduxValueSetter({
                            queryParam: "test",
                            url: "test",
                            actionDispatcher: "test"
                        })
                        .build(),
                ];

                expect(base).toEqual(factory);
            }
        );

    });

});
