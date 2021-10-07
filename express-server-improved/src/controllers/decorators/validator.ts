import 'reflect-metadata'
import { MetaDataKeys } from "./MetaDataKeys";

export function validator(keys: string[]) {
    return function (target: any, key: string, desc: PropertyDecorator) {
        Reflect.defineMetadata(MetaDataKeys.validator, target, key)
    }
}