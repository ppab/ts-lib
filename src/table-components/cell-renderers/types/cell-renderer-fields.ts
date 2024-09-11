import {LinkButtonProps,DeleteButtonProps} from "./component-props";
export type ComponentName = "LinkButton" | "DeleteButton"


export interface Component<P> {
    headerName: string
    cellRenderer: [ComponentName, P]
}

export interface DeleteButtonComponent extends Component<DeleteButtonProps> {
}

export interface LinkButtonComponent extends Component<LinkButtonProps> {
}


export type CellRendererFields = LinkButtonComponent | DeleteButtonComponent;
