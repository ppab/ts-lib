import {Factory} from 'fishery';
import {UrlBuilderQueryParameters} from "../../../url-builder/types";
import {RequireOnly} from "../../../types/types";


type AppStateConfig = `appState.${string}`;
type ParamsConfig = `params.${string}`;
type ApiPathConfig = `apiPath.${string}`;
type FormValuesConfig = `formValues.${string}`;
type UrlResolverDependenciesScope = ApiPathConfig | AppStateConfig | ParamsConfig | FormValuesConfig


type ListFromStateAPIFieldUrlResolverProps = {
    /*
     * dependencies?: this field is used to declare the scope of the contexts that need to be loaded in order to resolve the url.
     * our current scopes are
     * */
    url?: string;
    dependencies?: UrlResolverDependenciesScope[]; //from redux store //TODO verify string start with null or : ['params.*' | 'appSate.*'];
    parts?: (string | ['statePath' | 'dependency', string])[]; // TODO: This type is incorrect!!! update

    queryParameters?: UrlBuilderQueryParameters;
};

type ListFromStateAPIFieldDataResolverProps = {
    stateKey: string; //This model name should only come from the return type of the store keys
    displayedValue?: {
        path: string;
        parts: string[]; //When you want to display multiple properties of an abject as join string: I.E  ['address.street', 'address.number', 'address.zip', 'address.state'],
    };
    filterPath: string; // 'id', 'user.name'
    selectedValue: {
        path: string
    };
};


type ListFromStateAPIFieldProps = {
    urlResolver: ListFromStateAPIFieldUrlResolverProps;
    dataResolver: ListFromStateAPIFieldDataResolverProps;
};

type ListFromStateAPIField = {
    name: string;
    value: string;
    label: string;
    component: 'ListFieldFromStateAPI_2';
    props: ListFromStateAPIFieldProps;
};

class ListFromStateAPI2FieldFactory extends Factory<ListFromStateAPIField> {
    generic({
                name,
                value,
                label,
                props,
            }: RequireOnly<ListFromStateAPIField, 'name' | 'props'>) {
        return this.params({
            name,
            value: value ?? name,
            label: label ?? name,
            component: 'ListFieldFromStateAPI_2',
            props,
        });
    }
}

export const listFromStateAPI2FieldFactory = ListFromStateAPI2FieldFactory.define(
// @ts-ignore
    () => ({}),
);
