

import { Router, Request, Response } from "express";
import { UserController } from "./Controllers";
import { RequestHandler } from "./RequestHnadle";
import { Account } from "./Modals";
//import { Authorizer } from "./Authorizer";

export class UserRouter{

    router: Router;
    private userController: UserController;
    constructor() {
        this.userController = new UserController()

        
        this.router = Router()
        this.initializeRoutes()
        
    }

    initializeRoutes() {
        
        this.router.get('/login', async (req: Request, res: Response) => {
            console.log('login is called..')
            res.send({message: 'hello login'})
        })
        this.router.post('/login', this.userController.login) 
    }

    async conterollerRequest(req: Request, res: Response, next: Function): Promise<void> {
        let data: Account =  await new RequestHandler().getRequestBody(req)
        let responseData = await next(data)
        res.send(responseData)

    }
}

