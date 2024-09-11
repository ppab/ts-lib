import {ReduxValueSetterProps} from "./value-setter-props/redux-value-setter-props";

export type ValueSetterName = "reduxValueSetter" | "reduxValueSetter2"


export interface ValueSetter<P> {
    valueSetter: [ValueSetterName, P]
}

export interface IReduxValueSetter extends ValueSetter<ReduxValueSetterProps> {
}


export type ValueSetters = IReduxValueSetter
