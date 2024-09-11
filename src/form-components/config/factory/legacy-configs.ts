export const legacyConfigs=[
    {
        name: 'customerId',
        value: 'customerId',
        label: 'customer',
        component: 'ListFieldFromStatePath',

        props: {
            statePath: "commercialEntities.data",
            filter: {
                key: "id",
                operator: 'StringEquals',
                stateValuePath: "commercialEntities.selected.id"
            },
            displayedValuePath: "name",
            selectedValuePath: "id",
            filterPath: "name",

            // http://localhost:3002/contacts?filters=commercialEntityId:20927e1d-71fe-4245-bab3-555501d7ed22

        },
    },
    // {
    //     name: 'customerId',
    //     value: 'customerId',
    //     label: 'customer',
    //     component: 'AppStateListField',
    //     props: {
    //         sliceThunks: thunks,
    //         sliceActions: actions,
    //         formikValueKey: 'id',
    //         createEntityListComponent: CreateCommercialEntity,//from routes
    //         routePath: 'commercial-entities',//from schema
    //         applicationStateKey: 'commercialEntities',//from slice
    //         api: 'nest',
    //         transformer: (data) => {
    //             return data?.map(item => {
    //                 return objectToOption({
    //                     obj: item,
    //                     valueKey: 'id',
    //                     textKey: 'name',
    //                 });
    //             });
    //         },
    //     },
    // },

]