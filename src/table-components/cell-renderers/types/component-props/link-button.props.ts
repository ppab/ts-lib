import {EmptyObject, ExclusiveRequired, RequireOnly} from "../../../../types/types";


export type AllLinkButtonProps = {
    prefix: string,
    routeName: string,
    parts: string[]
    append: boolean
}

type Prefix = ExclusiveRequired<AllLinkButtonProps, "prefix">
type RouteName = ExclusiveRequired<AllLinkButtonProps, "routeName">
type Parts = ExclusiveRequired<AllLinkButtonProps, "parts" | "append">
export type LinkButtonProps = Prefix | RouteName | Parts | EmptyObject