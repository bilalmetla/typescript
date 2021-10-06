
import { Account, ResponseMessage, SessionToken,  UserCredientials } from "./Modals";
import { RequestHandler } from "./RequestHnadle";
import { Router, Request, Response } from "express";
import { Authorizer } from "./Authorizer";
import { Nedb } from "./db";

export class UserController {
    
    tokenGenerator: Authorizer;
    private db: Nedb;
    constructor() {
        this.tokenGenerator = new Authorizer();
        this.db = new Nedb()
     }
    
    async login(req: Request, res: Response, next: Function): Promise<any> {
        try {
            let user: Account =  await new RequestHandler().getRequestBody(req)
            console.log(user.username, user.password)
            const sessionToken = await new Authorizer().generateToken(user)
            
            if (!sessionToken) {
                let resp = {
                    message: 'Token Not generated'
                }
                return res.send(resp)
            } 
            return res.send(sessionToken)
            
        } catch (e: any) {
            return res.send({message:`Error: ${e.message}`})
        }
        
    }

    async putUserCredientials(credientials: UserCredientials):Promise<any> {
        let result = await this.db.insert('userCredientials', credientials);
        console.log(result)
        return result;
    }

    // async getUserCredientials(username: string, password: string): Promise<UserCredientials>{
    //     return {}
    // }
}