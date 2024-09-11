import {Factory} from 'fishery';
import {RequireOnly} from "../../../types/types";
import {
    CellRendererComponents,
    ComponentName,
    ComponentNames,
    ComponentProps,
    DeleteButtonProps,
    LinkButtonProps
} from "../../cell-renderers/types";

enum testEnum {
    test = 'test'
}


const refs = [
    {"headerName": "Id", "cellRenderer": ["LinkButton", {}]},
    {
        "field": "category",
        "editable": true,
        "type": "enum",
        "valueSetter": ["reduxValueSetter2", {
            "url": "urls.mutateUrl",
            "actionDispatcher": "actions.updateAction",
            "queryParam": ""
        }],
        "cellEditor": "agSelectCellEditor",
        "cellEditorParams": {"values": Object.keys(testEnum)},
        "enum": {"name": "CommercialEntityCategory", "path": "../enums/commercial-entity.enum"}

    },
    {
        "field": "number",
        "editable": true,
        "valueSetter": ["reduxValueSetter2", {
            "url": "urls.mutateUrl",
            "actionDispatcher": "actions.updateAction",
            "queryParam": ""
        }],
    },

    {
        "headerName": "Options",
        "cellRenderer": ["DeleteButton", {"url": "urls.mutateUrl", "actionDispatcher": "actions.deleteAction"}]
    }
]
type ColDefItemField = {
    field: string;
    editable: boolean;
    headerName: string
    cellRenderer: string;
};

type ColDef = CellRendererComponents | ColDefItemField


export class ColDefComponentFactory extends Factory<CellRendererComponents> {

    LinkButton({
                   headerName,
                   props
               }: {
        headerName: string
        props?: LinkButtonProps
    }) {
        return this.params({
            headerName,
            cellRenderer: [ComponentNames.LinkButton, props ?? {}]
        });
    }

    DeleteButton({
                     headerName,
                     props
                 }: {
        headerName: string
        props?: DeleteButtonProps
    }) {
        const defaultProps = {
            url: 'urls.mutateUrl',
            actionDispatcher: "actions.deleteAction"
        }
        return this.params({
            headerName,
            cellRenderer: [ComponentNames.DeleteButton, props ?? defaultProps]
        });
    }


}

export const colDefComponentComponentFactory = ColDefComponentFactory.define(
// @ts-ignore”
    () => ({}),
);
