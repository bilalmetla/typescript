import { RequestHandler } from 'express';
import 'reflect-metadata'
import { MetaDataKeys } from "./MetaDataKeys";


export function use(middleware: RequestHandler) {
    return function (target: any, key: string, desc: PropertyDecorator) {
        const middlwwares = Reflect.getMetadata(MetaDataKeys.middleWare, target, key) || []
        Reflect.defineMetadata(MetaDataKeys.middleWare, [...middlwwares, middleware], target, key)

    }
}