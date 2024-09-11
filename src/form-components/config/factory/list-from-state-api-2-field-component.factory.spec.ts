import {listFromStateAPI2FieldFactory} from './list-from-state-api-2-field-component.factory';

describe('listFromStateApiFieldComponent', () => {
    describe('generic()', () => {
        it('should be able to recreate the base object', () => {
            const [base, factory] = [
                {
                    name: 'name',
                    value: 'name',
                    label: 'name',
                    component: 'ListFieldFromStateAPI_2',
                    props: {
                        urlResolver: {
                            url: 'http://test.com',
                            dependencies: ['params.', 'appState.'],
                            parts: ['statePath'],
                        },
                        dataResolver: {
                            stateKey: 'modelName',
                            filterPath: 'name',
                            displayedValue: {
                                path: 'myPath',
                                parts: ['statePath'],
                            },
                            selectedValue:{path:'id'}
                        },
                    },
                },

                listFromStateAPI2FieldFactory
                    .generic({
                        name: 'name',
                        label: 'name',
                        value: 'name',
                        props: {
                            urlResolver: {
                                url: 'http://test.com',
                                dependencies: ['params.', 'appState.'],
                                parts: ['statePath'],
                            },
                            dataResolver: {
                                stateKey: 'modelName',
                                filterPath: 'name',
                                displayedValue: {
                                    path: 'myPath',
                                    parts: ['statePath'],
                                },
                                selectedValue: {path: 'id'},
                            },
                        },
                    })
                    .build(),
            ];

            expect(base).toEqual(factory);
        });

        it('should be able to recreate the base object', () => {
            const [base, factory] = [
                {
                    name: 'name',
                    value: 'name',
                    label: 'name',
                    component: 'ListFieldFromStateAPI_2',
                    props: {
                        urlResolver: {
                            url: 'http://test.com',
                            dependencies: ['params.', 'appState.'],
                            parts: ['statePath'],
                        },
                        dataResolver: {
                            stateKey: 'modelName',
                            filterPath: 'name',
                            displayedValue: {
                                path: 'myPath',
                                parts: ['statePath'],
                            },
                            selectedValue:{path:'id'}
                        },
                    },
                },
                listFromStateAPI2FieldFactory
                    .generic({
                        name: 'name',
                        label: 'name',
                        value: 'name',
                        props: {
                            urlResolver: {
                                url: 'http://test.com',
                                dependencies: ['params.', 'appState.'],
                                parts: ['statePath'],
                            },
                            dataResolver: {
                                stateKey: 'modelName',
                                filterPath: 'name',
                                displayedValue: {
                                    path: 'myPath',
                                    parts: ['statePath'],
                                },
                                selectedValue: {path: 'id',}
                            },
                        },
                    })
                    .build(),
            ];

            expect(base).toEqual(factory);
        });
    });
});
