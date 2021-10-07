
import { AccessRules, Account, HTTP_CODES, ResponseMessage, SessionToken,  UserCredientials } from "./Modals";
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
                return res.status(HTTP_CODES.NOT_FOUND).send(resp)
            } 

            return res.status(HTTP_CODES.OK).send(sessionToken)
            
        } catch (e: any) {
            return res.status(HTTP_CODES.BAD_REQUEST).send({message:`Error: ${e.message}`})
        }
        
    }

    async putUserCredientials(credientials: UserCredientials): Promise<any> {
        credientials.accessRights.push(AccessRules.CREATE)
        credientials.accessRights.push(AccessRules.READ)
        credientials.accessRights.push(AccessRules.UPDATE)
        let result = await this.db.insert('userCredientials', credientials);
        console.log(result)
        return result;
    }

    // async getUserCredientials(username: string, password: string): Promise<UserCredientials>{
    //     return {}
    // }
}