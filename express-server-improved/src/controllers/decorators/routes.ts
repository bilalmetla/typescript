import "reflect-metadata"

export function get(path: string): any {
    return function (target: any, key: string, desc: PropertyDecorator) {
        Reflect.defineMetadata('path', path, target, key)
    }
}