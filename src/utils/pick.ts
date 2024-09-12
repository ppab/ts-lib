import * as _ from "lodash";

export function pick(obj: { [key: string]: any }, properties: string[]) {
    return _.pick(obj, properties);
}
