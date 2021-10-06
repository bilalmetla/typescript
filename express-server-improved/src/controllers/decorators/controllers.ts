import "reflect-metadata"
import { Methods } from "./Methods";
import { MetaDataKeys } from "./MetaDataKeys";
import { NextFunction, RequestHandler, Request, Response } from "express";
import { AppRouter } from "../../AppRouter";


function bodyValidator(keys: string[]): RequestHandler {
    return function (req: Request, res: Response, next: NextFunction) {
        if (!req.body) {
            return res.status(422).send('Invalid Request')
        }
        for (let key of keys) {
            if (!req.body[key]) {
                return res.status(422).send('Invalid Request')
            }
        }

        return next()
    }
}

export function controller(routePrefix: string) {
    return function (target: Function) {
        const router = AppRouter.getInstance()
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key]
            const path = Reflect.getMetadata(MetaDataKeys.path, target.prototype, key)
            const method: Methods = Reflect.getMetadata(MetaDataKeys.method, target.prototype, key)

            const middlwwares = Reflect.getMetadata(MetaDataKeys.middleWare, target.prototype, key) || [];
            const requiredBodyProps = Reflect.getMetadata(MetaDataKeys.validator, target.prototype, key) || []
            const validator = bodyValidator(requiredBodyProps)

            if (path) {
                router[method](`${routePrefix}${path}`, ...middlwwares, validator, routeHandler)
            }
            
        }
    }
}