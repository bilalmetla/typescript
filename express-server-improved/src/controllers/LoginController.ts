import { Router, Request, Response } from "express";
import { get, controller } from './decorators';



@controller('/auth')
class LoginController {


    @get('/login')
    getLogin(req: Request, res: Response): void {
        res.send(`
            <div>
                hello get login form is here
            </div>
        `)
    }
}