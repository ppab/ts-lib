import {colDefComponentComponentFactory} from "./col-def-component-component.factory";

describe('cellRendererComponentFactory', () => {
    describe('LinkButton()', () => {
        it('should be able to recreate the base object with parts ', () => {

            const [base, factory] = [
                {"headerName": "test", "cellRenderer": ["LinkButton", {parts: ["test"], append: false}]},
                colDefComponentComponentFactory
                    .LinkButton({
                        headerName: "test",
                        props: {parts: ["test"], append: false}
                    })
                    .build(),
            ];

            expect(base).toEqual(factory);
        });
        it('should be able to recreate the base object with parts ', () => {

            const [base, factory] = [
                {"headerName": "test", "cellRenderer": ["LinkButton", {}]},
                colDefComponentComponentFactory
                    .LinkButton({
                        headerName: "test",
                    })
                    .build(),
            ];

            expect(base).toEqual(factory);
        });
        it('should be able to recreate the base object with routeName', () => {

            const [base, factory] = [
                {"headerName": "test", "cellRenderer": ["LinkButton", {routeName: "test"}]},
                colDefComponentComponentFactory
                    .LinkButton({
                        headerName: "test",
                        props: {
                            routeName: "test"
                        }
                    })
                    .build(),
            ];

            expect(base).toEqual(factory);
        });
        it('should be able to recreate the base object with prefix', () => {
            const [base, factory] = [
                {"headerName": "test", "cellRenderer": ["LinkButton", {prefix: "test"}]},
                colDefComponentComponentFactory
                    .LinkButton({
                        headerName: "test",
                        props: {
                            prefix: "test"
                        }
                    })
                    .build(),
            ];

            expect(base).toEqual(factory);
        });
    });
    describe('DeleteButton()', () => {
        it('should be able to recreate the base object', () => {
            const [base, factory] = [
                {
                    "headerName": "test", "cellRenderer": ["DeleteButton", {
                        url: 'urls.mutateUrl',
                        actionDispatcher: "actions.deleteAction"
                    }]
                },

                colDefComponentComponentFactory
                    .DeleteButton({
                        headerName: "test",
                    })
                    .build(),
            ];

            expect(base).toEqual(factory);
        });
        it('should be able to recreate the base object', () => {
            const [base, factory] = [
                {
                    "headerName": "test", "cellRenderer": ["DeleteButton", {
                        url: 'urls.mutateUrl',
                        actionDispatcher: "actions.deleteAction"
                    }]
                },

                colDefComponentComponentFactory
                    .DeleteButton({
                        headerName: "test",
                        props: {
                            url: 'urls.mutateUrl',
                            actionDispatcher: "actions.deleteAction"
                        }
                    })
                    .build(),
            ];

            expect(base).toEqual(factory);
        });
    });
});
