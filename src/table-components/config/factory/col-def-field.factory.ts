import {Factory} from 'fishery';
import {ColDef} from "ag-grid-community"
import {RequireOnly} from "../../../types/types";
import {
    CellRendererComponents,
    ComponentName,
    ComponentProps,
    DeleteButtonProps,
    LinkButtonProps
} from "../../cell-renderers/types";
import {ValueSetter, ValueSetters} from "../../value-setters/types";
import {valueSetterFactory} from "./value-setter.factory";

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

type Customizable = {
    /** Tooltip for the column header */
    headerTooltip?: string;
    /** Lock a column to position to `'left'` or`'right'` to always have this column displayed in that position. `true` is treated as `'left'` */
    lockPosition?: boolean | 'left' | 'right';
    singleClickEdit?: boolean;
    /**
     * Set to `true`, to have the cell editor appear in a popup.
     */
    cellEditorPopup?: boolean;
    /**
     * Set the position for the popup cell editor. Possible values are
     *  - `over` Popup will be positioned over the cell
     *  - `under` Popup will be positioned below the cell leaving the cell value visible.
     *
     * @default 'over'
     */
    cellEditorPopupPosition?: 'over' | 'under';
}
type CellRendererFieldWIP = {
    /** The name to render in the column header. If not specified and field is specified, the field name will be used as the header name. */
    headerName?: RequireOnly<ColDef, "headerName">

    /** The field of the row object to get the cell's data from. Deep references into a row object is supported via dot notation, i. e 'address. firstLine'.*/
    field?: string;
    /**
     * Set to `true` if this column is editable, otherwise `false`. Can also be a function to have different rows editable.
     * @default false
     */
    editable?: boolean

    /**
     * Provide your own cell Renderer component for this column's cells.
     * See [Cell Renderer](https://www.ag-grid.com/javascript-data-grid/component-cell-renderer/) for framework specific implementation details.
     */
    cellRenderer?: any;
    /** Provide your own cell editor component for this column's cells.*/
    cellEditor?: any;
    /** Params to be passed to the `cellEditor` component. */
    cellEditorParams?: any;
    /**
     * Set to `true` to have cells under this column enter edit mode after single click.
     * @default false
     */
    /** Sets the value into your data for saving. Return `true` if the data changed. */
    valueSetter?: ValueSetters
    /** Sets the value into your data for saving.Must use Pre-defined ValueSetters */
    preDefinedValueSetter?: ValueSetters


    // enum?: {"name": "CommercialEntityCategory", "path": "../enums/commercial-entity.enum"}
};

type CellRendererBasicField = {
    field: string;
    editable: boolean
    valueSetter: ValueSetters["valueSetter"] | undefined
    cellEditor?: string
    cellEditorParams?: {
        values: string[]
    }
    cellEditorPopup?: boolean
    comment?: string
    cellRenderer?: string
};


export class ColDefFieldFactory extends Factory<CellRendererBasicField> {
    EnumField({
                  field,
                  enumObj
              }: {
        field: string,
        enumObj: { [key: string]: string }
    }) {
        return this.Field({
            field,
            editable: true,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {"values": Object.keys(enumObj)},
        })
    }

    Field({
              field,
              editable,
              valueSetter,
              cellEditor,
              cellEditorParams,
              cellEditorPopup,
              cellRenderer
          }: {
        field: string,
        editable?: boolean
        valueSetter?: ValueSetters["valueSetter"]
        cellEditor?: string
        cellEditorParams?: {
            values: string[]
        },
        cellEditorPopup?: boolean
        cellRenderer?: string
    }) {

        if (editable) {
            return this.params({
                field,
                editable: true,
                valueSetter: valueSetter ?? valueSetterFactory.ReduxValueSetter().build().valueSetter,
                cellEditor,
                cellEditorParams,
                cellEditorPopup,
                cellRenderer
            });
        }

        return this.params({
            field,
            editable: false,
            valueSetter,
            cellEditorPopup,
            cellRenderer
        });
    }


}

export const colDefFactory = ColDefFieldFactory.define(
// @ts-ignore”
    () => ({}),
);
