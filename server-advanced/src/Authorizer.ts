
import { TokenGenerator, SessionToken, Account } from "./Modals";
import { Nedb } from "./db";

export class Authorizer implements TokenGenerator {

    private db: Nedb;
    constructor() {
        this.db = new Nedb()
    }

    async generateToken(account: Account): Promise<SessionToken | undefined>{
    
        const where = {
            $and: [
                {username: account.username},
                {password: account.password},
            ]
        }
        let userCredientials = await this.db.find('userCredientials', where)
        if (!userCredientials || userCredientials.length === 0) {
            return undefined
        }

        return {
            tokenId: Math.random().toString()
        }   
        
    }
}