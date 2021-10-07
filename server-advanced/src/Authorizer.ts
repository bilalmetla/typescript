
import { TokenGenerator, SessionToken, Account, UserCredientials } from "./Modals";
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
        let userCredientials: UserCredientials[] = await this.db.find('userCredientials', where)
        if (!userCredientials || userCredientials.length === 0) {
            return undefined
        }

        const tokenData = {
            accessRights: userCredientials[0].accessRights,
            username: userCredientials[0].username,
            isValid: true,
            expirationDate: this.tokenExpiration(),
            tokenId: this.token()
        }

        await this.storeToken(tokenData)
        return tokenData
        
        
    }

    tokenExpiration(): Date {
        return new Date(Date.now()+ (60*60*1000) )
    }

    token(): string{
        return Math.random().toString()
    }

    async storeToken(token: SessionToken) {
        await this.db.insert('sessionToken', token)
    }
}