
import { Request } from "express";

export class RequestHandler {

    data: any;
    constructor() { }
    
    async getRequestBody(req: Request): Promise<any>{
        this.data = req.body;
        return this.data;
    }
}