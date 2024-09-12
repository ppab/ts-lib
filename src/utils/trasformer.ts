import {get} from "./get";
import {pick} from "./pick";
import {createNestedObjWithValue} from "./create-nested-obj-with-value";

type Transformers = "pick" | "get" | "mapObject";
type TransformerCtx = { [key: string]: any };

interface ITransformerConfig<N = Transformers, P = { ctx?: TransformerCtx }> {
    name: N,
    props: P
}

type PickTransformerKeys = string[];
type  PickTransformerArgs = { ctx: TransformerCtx, keys: PickTransformerKeys }
export const pickTransformer = ({ctx, keys}: PickTransformerArgs) => {
    return pick(ctx, keys);
};

type GetTransformerPath = string;
type  GetTransformerArgs = { ctx: TransformerCtx, path: GetTransformerPath }
export const getTransformer = ({ctx, path}: GetTransformerArgs) => {
    return get(ctx, path);
};

type ObjMapConfig = { [key: string]: ResolverTransformerConfigArgs };
type  MapObjectTransformerArgs = { ctx: TransformerCtx, objMapConfig: ObjMapConfig }
export const mapObjectTransformer = ({
                                         ctx,
                                         objMapConfig,
                                     }: MapObjectTransformerArgs) => {
    const mappedObj: any = {};

    for (let key in objMapConfig) {
        const {name, props} = objMapConfig[key];

        props.ctx = ctx; //set the context of the "child" transformers to this 'ctx'

        mappedObj[key] = resolveTransformerConfig({
            name,
            props,
        });
    }

    return createNestedObjWithValue(mappedObj);
};

type TransformerArgs =
    MapObjectTransformerArgs
    | GetTransformerArgs
    | PickTransformerArgs

export function transformer(transformers: Transformers, props: TransformerArgs) {
    // console.log("transforming->>>", transformers);
    switch (transformers) {
        case "pick":
            return pickTransformer(props as PickTransformerArgs);
        case "get":
            return getTransformer(props as GetTransformerArgs);
        case "mapObject":
            return mapObjectTransformer(props as MapObjectTransformerArgs);
        default:
            throw new Error(`${transformers} Transform not found!`);
    }
}

export type ResolverTransformerConfigArgs = { name: Transformers, props: TransformerArgs }

export function resolveTransformerConfig({name, props}: ResolverTransformerConfigArgs) {
    return transformer(name, props);
}


//--------configs
type PickTransformerConfigProps = {
    ctx?: TransformerCtx
    keys: PickTransformerKeys
}

interface PickTransformerConfig extends ITransformerConfig<'pick', PickTransformerConfigProps> {
}

type GetTransformerConfigProps = {
    ctx?: TransformerCtx
    path: string;
}

interface GetTransformerConfig extends ITransformerConfig<'get', GetTransformerConfigProps> {
}

type MapObjectTransformerConfigProps = {
    ctx?: TransformerCtx
    objMapConfig: ObjMapConfig

}

interface MapObjectTransformerConfig extends ITransformerConfig<'mapObject', MapObjectTransformerConfigProps> {
}

export type TransformerConfig =
    | PickTransformerConfig
    | GetTransformerConfig
    | MapObjectTransformerConfig;

///---------
