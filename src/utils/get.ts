import * as _ from 'lodash';

export function get(obj: any, path: any) {
    return _.get(obj, path)
}