import {Factory} from 'fishery';
import {ValueSetters} from "../../value-setters/types";


export class ValueSetterFactory extends Factory<ValueSetters> {
    ReduxValueSetter({
                         url, actionDispatcher, queryParam
                     }: {
        url?: string;
        actionDispatcher?: string
        queryParam?: string
    }={}) {
        const defaultProps = {
            "url": "urls.mutateUrl",
            "actionDispatcher": "actions.updateAction",
            "queryParam": ""
        }
        return this.params({
            valueSetter: ["reduxValueSetter2", {
                url: url ?? defaultProps.url,
                actionDispatcher: actionDispatcher ?? defaultProps.actionDispatcher,
                queryParam: queryParam ?? defaultProps.queryParam,
            }]
        });
    }


}

export const valueSetterFactory = ValueSetterFactory.define(
// @ts-ignore”
    () => ({}),
);
