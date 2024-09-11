import {DeleteButtonProps, LinkButtonProps} from "./component-props/";

export type ComponentName = "LinkButton" | "DeleteButton"
export enum ComponentNames {
    LinkButton = "LinkButton",
    DeleteButton = "DeleteButton",
}

export interface Component<N,P> {
    headerName: string
    cellRenderer: [N, P]
}

export interface DeleteButtonComponent extends Component<ComponentNames.DeleteButton,DeleteButtonProps> {
}

export interface LinkButtonComponent extends Component<ComponentNames.LinkButton,LinkButtonProps> {
}


export type CellRendererComponents = LinkButtonComponent| DeleteButtonComponent;
